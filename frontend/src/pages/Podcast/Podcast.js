import ActivityIndicator from "../../components/ActivityIndicator";
import ContentGrid from "../../components/ContentGrid";
import PodcastSubscribe from "../../components/PodcastSubscribe";
import React from "react";
import Strapline from "../../components/Strapline";
import getPodcast from "./getPodcast";

const requestOptions = (currentPage) => ({
	page: currentPage,
	pageSize: currentPage === 1 ? 10 : 9,
	orderings: "[my.podcast.original_date_published desc]",
});

const strapline = (
	<React.Fragment>
		<Strapline>
			On the Christian Heritage London podcast we meet Christian leaders
			who serve the church in the purpose, perspective and power of the
			gospel.
		</Strapline>
		<PodcastSubscribe />
	</React.Fragment>
);

export default () => {
	const [articles, setArticles] = React.useState([]);
	const [nextPage, setNextPage] = React.useState();
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		(async function () {
			const { data: newArticles, next_page } = await getPodcast(
				requestOptions(currentPage)
			);

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
					strapline={strapline}
					nextPage={nextPage}
					filterImages
					onNextPage={() => setCurrentPage(currentPage + 1)}
				/>
			)}
		</React.Fragment>
	);
};
