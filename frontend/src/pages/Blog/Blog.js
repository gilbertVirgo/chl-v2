import ActivityIndicator from "../../components/ActivityIndicator";
import ContentGrid from "../../components/ContentGrid";
import PodcastSubscribe from "../../components/PodcastSubscribe";
import React from "react";
import Strapline from "../../components/Strapline";
import getBlog from "./getBlog";

const requestOptions = (currentPage) => ({
	page: currentPage,
	pageSize: currentPage === 1 ? 10 : 9,
	orderings: "[my.article.original_date_published desc]",
});

// Got here so far. Just fixing a few things to make this work for the blog

export default () => {
	const [articles, setArticles] = React.useState([]);
	const [nextPage, setNextPage] = React.useState();
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		(async function () {
			const { data: newArticles, next_page } = await getBlog(
				requestOptions(currentPage)
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
					articles={articles}
					nextPage={nextPage}
					onNextPage={() => setCurrentPage(currentPage + 1)}
				/>
			)}
		</React.Fragment>
	);
};
