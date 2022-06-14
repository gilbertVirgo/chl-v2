import * as prismic from "@prismicio/client";

import get from "../../prismic/get";

export default () => get(prismic.predicate.at("document.type", "podcast"));
