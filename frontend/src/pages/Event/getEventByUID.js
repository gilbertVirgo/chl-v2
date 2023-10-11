import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

export default (uid) => get([prismic.predicate.at("my.event.uid", uid)]);

// Haven't tested this yet. Plug it into Episode.js
