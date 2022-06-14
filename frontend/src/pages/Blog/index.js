import { Route, Router, Switch, useHistory } from "react-router-dom";

import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import Feature from "../../components/Feature";
import Lattice from "../../components/Lattice";
import { Paragraph } from "../../components/Text";
import React from "react";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";
import VideoSpotlight from "../../components/VideoSpotlight";
import ellipsize from "ellipsize";
import getEpisodes from "../../api/getEpisodes";

export default () => {
	const history = useHistory();

	const [[firstArticle, ...articles], setArticles] = React.useState([]);

	React.useEffect(() => {
		(async function () {
			let articles = await getEpisodes();

			console.log({ episodes });

			setArticles(
				articles.sort(
					(a, b) => new Date(b.pubDate) - new Date(a.pubDate)
				)
			);
		})();
	}, []);

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!articles.length}>
				Loading articles...
			</ActivityIndicator>

			{articles.length && (
				<React.Fragment>
					<Switch>
						<Route
							path="/podcast/:ytid"
							render={({
								match: {
									params: { ytid },
								},
							}) => (
								<VideoSpotlight
									src={ytidToVideo(ytid)}
									onClose={() => history.push("/podcast")}
								/>
							)}
						/>
					</Switch>
					<Section explode>
						<Feature invert>
							<Feature.Title>{firstArticle.title}</Feature.Title>
							<Feature.Image
								src={
									require("../../assets/faces/marshall-large.jpg") /*ytidToImage(firstArticle.ytid)*/
								}
							/>
							<Feature.Body>
								<Paragraph>
									{ellipsize(firstArticle.desc, 120)}
								</Paragraph>
							</Feature.Body>
						</Feature>
					</Section>
					<Section deflate>
						<Strapline>
							On the Christian Heritage London podcast we meet
							Christian leaders who serve the church in the
							purpose, perspective and power of the gospel.
						</Strapline>
						<Button
							dropdown
							center
							options={{
								items: [
									{
										value: "Apple Podcasts",
										href: "https://podcasts.apple.com/gb/podcast/christian-heritage-london-podcast/id1232042916",
									},
									{
										value: "Spotify",
										href: "https://podcasts.apple.com/gb/podcast/christian-heritage-london-podcast/id1232042916",
									},
								],
							}}
						>
							Subscribe
						</Button>
					</Section>
					<Section explode>
						<Lattice
							panels={episodes.map(({ title, ytid }) => ({
								title,
								button: {
									text: "Watch a highlight",
									icon: "video",
									onClick: () =>
										history.push(`/podcast/${ytid}`),
								},
								image: [
									require("../../assets/faces/leithart.jpg"),
									require("../../assets/faces/lucas.jpg"),
									require("../../assets/faces/marshall.jpg"),
									require("../../assets/faces/clark.jpg"),
								][Math.floor(Math.random() * 4)], //ytidToImage(ytid),
							}))}
						/>
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
