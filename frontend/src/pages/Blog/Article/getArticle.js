import * as prismic from "@prismicio/client";

import get from "../../../prismic/get";

export default (id) =>
	get([prismic.predicate.at("document.id", id)], {
		fetchLinks: "author.name,author.description,author.image",
	});

// Haven't tested this yet. Plug it into Episode.js
