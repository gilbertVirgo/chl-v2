import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

const parse = (articles) => {
	if (!articles.length) return [];

	return articles.map(({ id, title, description, image }) => ({
		title,
		image: image.url,
		description,
		href: `/blog/article/${id}`,
	}));
};

export default async (options) => {
	const { next_page, data } = await get(
		[prismic.predicate.at("document.type", "article")],
		options
	);

	return { next_page, data: parse(data) };
};
