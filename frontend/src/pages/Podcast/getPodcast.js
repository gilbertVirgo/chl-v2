import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

export default (options) =>
	get([prismic.predicate.at("document.type", "podcast")], options);
