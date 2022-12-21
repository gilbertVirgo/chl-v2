import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

const parse = (articles) => {
	if (!articles.length) return [];

	return articles.map(({ id, title, description, image }) => ({
		id,
		title,
		image: image.url,
		description,
		href: `/podcast/episode/${id}`,
	}));
};

export default async (options) => {
	const { next_page, data } = await get(
		[prismic.predicate.at("document.type", "podcast")],
		options
	);

	return { next_page, data: parse(data) };
};
