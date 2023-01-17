export default (result) => ({
	asArticle: () => {
		const {
			id,
			uid,
			data: {
				title,
				author: { data: author },
				description,
				content,
				image: { url: image },
			},
		} = result;

		return {
			id,
			title,
			author,
			description,
			content: content || null,
			image,
			href: `/article/${uid}`,
		};
	},
	asEpisode: () => {
		console.log(result.data);

		const {
			id,
			uid,
			data: {
				title,
				description,
				youtube_video: { url: youtube_video_url },
				audio_url,
				image: { url: image },
			},
		} = result;

		return {
			id,
			title,
			description,
			youtube_video_url,
			audio_url,
			image,
			href: `/podcast/episode/${uid}`,
		};
	},
});
