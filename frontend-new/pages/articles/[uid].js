import Article from "../../components/Article";
import React from "react";
import { createClient } from "../prismicio";

export default ({ article }) => {
	return <Article {...article} />;
};

export async function getStaticProps({ params, previewData }) {
	const client = createClient({ previewData });

	const article = await client.getByID("article", params.id, {
		fetchLinks: "author.name,author.description,author.image",
	});

	return {
		props: {
			article,
		},
	};
}
