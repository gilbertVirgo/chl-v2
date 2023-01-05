import * as prismic from "@prismicio/client";

import ActivityIndicator from "../components/ActivityIndicator";
import ContentGrid from "../components/ContentGrid";
import React from "react";
import get from "../prismic/get";

const parse = (articles) => {
	if (!articles.length) return [];

	return articles.map(
		({
			id,
			title,
			description,
			author: {
				data: { name },
			},
			image,
		}) => ({
			id,
			title,
			image: image.url,
			description,
			author: name,
			href: `/articles/${id}`,
		})
	);
};

const getBlog = async (options) => {
	const { next_page, data } = await get(
		[prismic.predicate.at("document.type", "article")],
		{ ...options, fetchLinks: "author.name" }
	);

	console.log({ data });

	return { next_page, data: parse(data) };
};

const requestOptions = ({ currentPage, after }) => ({
	after,
	pageSize: currentPage === 1 ? 10 : 9,
	orderings: "[document.first_publication_date desc]",
});

export default () => {
	const [nextPage, setNextPage] = React.useState();
	const [currentPage, setCurrentPage] = React.useState(1);

	const [articles] = useAllPrismicDocumentsByType("article", {
		orderings: "[document.first_publication_date desc]",
		fetchLinks: "author.name",
	});

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={loading} />

			{!loading && (
				<ContentGrid
					hasAuthor
					articles={articles}
					nextPage={nextPage}
					onNextPage={() => setCurrentPage(currentPage + 1)}
				/>
			)}
		</React.Fragment>
	);
};
