import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

const parse = (articles) => {
	if (!articles.length) return [];

	return articles.map(({ id, title, description, author, image }) => ({
		title,
		image: image.url,
		description,
		// author: JSON.stringify(author),
		href: `/blog/article/${id}`,
	}));
};

// I attempted to use graphQuery to grab the author. It's a sham.

// const graphQuery = encodeURIComponent(`{
// article {
// author {
// name
// }
// }
// }`);

export default async (options) => {
	const { next_page, data } = await get(
		[prismic.predicate.at("document.type", "article")],
		options
	);

	console.log({ data: parse(data) });

	return { next_page, data: parse(data) };
};
