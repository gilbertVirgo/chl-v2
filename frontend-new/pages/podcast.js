import ActivityIndicator from "../components/ActivityIndicator";
import ContentGrid from "../components/ContentGrid";
import PodcastSubscribe from "../components/PodcastSubscribe";
import React from "react";

const getPodcast = async (options) => {
	const { next_page, data } = await get(
		[prismic.predicate.at("document.type", "podcast")],
		options
	);

	return { next_page, data: parse(data) };
};

const requestOptions = ({ currentPage, after }) => ({
	after,
	pageSize: currentPage === 1 ? 10 : 9,
	orderings: "[my.podcast.original_date_published desc]",
});

export default () => {
	const [nextPage, setNextPage] = React.useState();
	const [currentPage, setCurrentPage] = React.useState(1);

	const [episodes] = useAllPrismicDocumentsByType("article", {
		orderings: "[my.podcast.original_date_published desc]",
	});

	React.useEffect(() => {
		(async function () {
			const { data: newEpisodes, next_page } = await getPodcast(
				requestOptions({
					currentPage,
					after: episodes.length
						? episodes.slice(-1)[0].id
						: undefined,
				})
			);

			setEpisodes([...episodes, ...newEpisodes]);
			setNextPage(next_page);
		})();
	}, [currentPage]);

	const loading = !episodes.length;

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={loading} />

			{!loading && (
				<ContentGrid
					episodes={episodes}
					strapline={<PodcastSubscribe />}
					nextPage={nextPage}
					onNextPage={() => setCurrentPage(currentPage + 1)}
				/>
			)}
		</React.Fragment>
	);
};

export async function getStaticProps() {
	const client = createClient();

	const podcast = await client.getByType("podcast", {
		pageSize: 4,
	});

	return {
		props: {
			podcast,
		},
	};
}
