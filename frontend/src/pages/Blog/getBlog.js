import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

const parse = (articles) => {
	if (!articles.length) return [];

	return articles.map(
		({
			id,
			title,
			description,
			author: {
				data: { name },
			},
			image,
		}) => ({
			id,
			title,
			image: image.url,
			description,
			author: name,
			href: `/articles/${id}`,
		})
	);
};

export default async (options) => {
	const { next_page, data } = await get(
		[prismic.predicate.at("document.type", "article")],
		{ ...options, fetchLinks: "author.name" }
	);

	console.log({ data });

	return { next_page, data: parse(data) };
};
