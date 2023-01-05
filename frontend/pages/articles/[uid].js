import * as prismic from "@prismicio/client";

import ActivityIndicator from "../../../components/ActivityIndicator";
import Article from "../../../components/Article";
import React from "react";
import get from "../../../prismic/get";
import { useRouter } from "next/router";

const getArticle = (id) =>
	get([prismic.predicate.at("document.id", id)], {
		fetchLinks: "author.name,author.description,author.image",
	});

export default () => {
	const router = useRouter();
	const { id } = router.query;

	const [props] = use("article", id);

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!props}>
				Loading...
			</ActivityIndicator>

			{!!props && <Article {...props} />}
		</React.Fragment>
	);
};
