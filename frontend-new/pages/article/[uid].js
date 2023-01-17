import Article from "../../components/Article";
import React from "react";
import { createClient } from "../../prismicio";
import parseOne from "../../scripts/parseOne";

export default ({ article }) => {
	return <Article {...article} />;
};

export async function getStaticProps({ params }) {
	const client = createClient();

	const article = await client.getByUID("article", params.uid, {
		graphQuery: `{
	article {
		title
		image
		description
		content
		author {
			name
			description
			image
		}
	}
}`,
	});

	return {
		props: {
			article: parseOne(article).asArticle(),
		},
	};
}

export async function getStaticPaths() {
	const client = createClient();

	const articles = await client.getByType("article", {
		graphQuery: `{
	article {
		uid
	}
}`,
	});

	return {
		// Not sure if this is really the best way to do this
		// but probably pretty ideal for SEO. This will find
		// every article and assign it a static page based
		// on its ID.

		paths: articles.results.map(({ uid }) => `/article/${uid}`),
		fallback: true,
	};
}
