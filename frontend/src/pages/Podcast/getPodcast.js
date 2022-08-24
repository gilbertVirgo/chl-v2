import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

export default ({ pageSize = 20, page = 1 }) =>
	get([prismic.predicate.at("document.type", "podcast")], {
		pageSize,
		page,
	});
