import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import Feature from "../../components/Feature";
import Lattice from "../../components/Lattice";
import { Paragraph } from "../../components/Text";
import PodcastFeature from "./components/PodcastFeature";
import PodcastSubscribe from "../../components/PodcastSubscribe";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";
import ellipsize from "ellipsize";
import getEpisodes from "../../api/getEpisodes";
import getPodcast from "../Podcast/getPodcast";

export default () => {
	const [podcastLoaded, setPodcastLoaded] = React.useState(false);
	const articlesLoaded = true;

	const pageLoaded = podcastLoaded && articlesLoaded;

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!pageLoaded} />

			<PodcastFeature onLoad={() => setPodcastLoaded(true)} />
			{/* <ArticlesFeature onLoad={() => ...} */}

			<Section explode>
				<Feature invert>
					<Feature.Title>London Walks</Feature.Title>
					<Feature.Embed src="https://www.youtube.com/embed/EGVOOeBghcw" />
					<Feature.Body>
						<Paragraph>
							We give walks and tours through the City of London,
							Westminster, the British Museum, the National
							Gallery and the V&A Museum.
						</Paragraph>
						{/* <Paragraph>
							<a href="/walks">Click here for more details</a>
						</Paragraph> */}
						<Button href="/walks/apply" theme="red" suspend>
							Apply for a London Day
						</Button>
					</Feature.Body>
				</Feature>
			</Section>
		</React.Fragment>
	);
};