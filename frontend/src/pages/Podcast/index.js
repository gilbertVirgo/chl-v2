import { Route, Switch, useHistory } from "react-router-dom";

import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import Episode from "./Episode";
import Feature from "../../components/Feature";
import Lattice from "../../components/Lattice";
import { Paragraph } from "../../components/Text";
import React from "react";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";
import VideoSpotlight from "../../components/VideoSpotlight";
import ellipsize from "ellipsize";
import getPodcast from "./getPodcast";

export default () => {
	const history = useHistory();

	const [[firstEpisode, ...episodes], setEpisodes] = React.useState([]);

	React.useEffect(() => {
		(async function () {
			let episodes = await getPodcast();

			console.log({ episodes });

			setEpisodes(
				episodes.sort(
					(a, b) => new Date(b.pubDate) - new Date(a.pubDate)
				)
			);
		})();
	}, []);

	const youtubeURLToEmbedURL = (url) =>
		`https://youtube.com/embed/${url.split("/").slice(-1)}`;

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!episodes.length}>
				Loading podcasts...
			</ActivityIndicator>

			{episodes.length && (
				<React.Fragment>
					<Switch>
						<Route
							path="/podcast/video/:id"
							render={({
								match: {
									params: { id },
								},
							}) => (
								<VideoSpotlight
									src={youtubeURLToEmbedURL(
										episodes.find((e) => e.id == id)
											.youtube_video.url
									)}
									onClose={() => history.push("/podcast")}
								/>
							)}
						/>
						<Route
							path="/podcast/episode/:id"
							component={Episode}
						/>
					</Switch>
					<Section explode>
						<Feature invert>
							<Feature.Title>{firstEpisode.title}</Feature.Title>
							<Feature.Image src={firstEpisode.image.url} />
							<Feature.Body>
								<Paragraph>
									{ellipsize(firstEpisode.desc, 120)}
								</Paragraph>
								<Button
									icon="video"
									theme="grey"
									onClick={() =>
										history.push(
											`/podcast/video/${firstEpisode.id}`
										)
									}
								>
									Watch a highlight
								</Button>
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
							panels={episodes.map(({ id, title, image }) => ({
								title,
								button: {
									text: "Watch a highlight",
									icon: "video",
									onClick: () =>
										history.push(`/podcast/video/${id}`),
								},
								image: image.url,
							}))}
						/>
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
