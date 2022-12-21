import ActivityIndicator from "../../components/ActivityIndicator";
import ContentGrid from "../../components/ContentGrid";
import { Paragraph } from "../../components/Text";
import PodcastSubscribe from "../../components/PodcastSubscribe";
import React from "react";
import Strapline from "../../components/Strapline";
import getPodcast from "./getPodcast";

const requestOptions = ({ currentPage, after }) => ({
	after,
	pageSize: currentPage === 1 ? 10 : 9,
	orderings: "[my.podcast.original_date_published desc]",
});

const strapline = (
	<React.Fragment>
		<Paragraph
			style={{
				margin: "0 auto 15px",
				textAlign: "center",
			}}
		>
			Subscribe to the Christian Heritage London podcast on Apple Podcasts
			or Spotify
		</Paragraph>
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
				requestOptions({
					currentPage,
					after: articles.length
						? articles.slice(-1)[0].id
						: undefined,
				})
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
					onNextPage={() => setCurrentPage(currentPage + 1)}
				/>
			)}
		</React.Fragment>
	);
};
