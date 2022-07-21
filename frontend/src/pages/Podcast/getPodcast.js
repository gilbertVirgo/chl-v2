import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

export default (limit) =>
	get([prismic.predicate.at("document.type", "podcast")], {
		pageSize: limit,
	});
