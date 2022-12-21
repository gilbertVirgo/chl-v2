import ActivityIndicator from "../../components/ActivityIndicator";
import ContentGrid from "../../components/ContentGrid";
import React from "react";
import getBlog from "./getBlog";

const requestOptions = ({ currentPage, after }) => ({
	after,
	pageSize: currentPage === 1 ? 10 : 9,
	orderings: "[my.article.original_date_published desc]",
});

export default () => {
	const [articles, setArticles] = React.useState([]);
	const [nextPage, setNextPage] = React.useState();
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		(async function () {
			const { data: newArticles, next_page } = await getBlog(
				requestOptions({
					currentPage,
					after: articles.length
						? articles.slice(-1)[0].id
						: undefined,
				})
			);

			console.log({ newArticles });

			setArticles([...articles, ...newArticles]);
			setNextPage(next_page);
		})();
	}, [currentPage]);

	const loading = !articles.length;

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
