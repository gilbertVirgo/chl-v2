import { Route, Switch, useHistory } from "react-router-dom";

import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import Episode from "./Episode";
import Feature from "../../components/Feature";
import Lattice from "../../components/Lattice";
import { Paragraph } from "../../components/Text";
import PodcastSubscribe from "../../components/PodcastSubscribe";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";
import VideoSpotlight from "../../components/VideoSpotlight";
import ellipsize from "ellipsize";
import getPodcast from "./getPodcast";

export default () => {
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

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!episodes.length}>
				Loading podcast...
			</ActivityIndicator>

			{episodes.length && (
				<React.Fragment>
					<Section explode>
						<Feature invert>
							<Feature.Title>{firstEpisode.title}</Feature.Title>
							<Feature.Image
								href={`/podcast/episode/${firstEpisode.id}`}
								src={firstEpisode.image.url}
							/>
							<Feature.Body>
								<Paragraph>
									{ellipsize(
										RichText.asText(
											firstEpisode.description
										),
										120
									)}
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
						<PodcastSubscribe />
					</Section>
					<Section explode>
						<Lattice
							panels={episodes.map(({ id, title, image }) => ({
								title,
								image: image.url,
								href: `/podcast/episode/${id}`,
							}))}
						/>
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
