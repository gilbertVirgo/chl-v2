import { Heading, Paragraph } from "../../../components/Text";
import { Link, useParams } from "react-router-dom";

import ActivityIndicator from "../../../components/ActivityIndicator";
import DefaultAudioPlayer from "../../../components/AudioPlayer";
import DefaultGrid from "../../../components/Grid";
import { Icon } from "../../../components/Button/styles";
import PodcastSubscribe from "../../../components/PodcastSubscribe";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../../../components/Section";
import { TextGrid } from "./styles";
import YouTubePlayer from "../../../components/YouTubePlayer";
import getEpisode from "./getEpisode";
import media from "../../../media";
import styled from "styled-components";

const AudioPlayer = styled(DefaultAudioPlayer)`
	margin-bottom: 50px;

	${media.minWidth("l")`
		margin-bottom: 75px;
	`}
`;

export default () => {
	const [episode, setEpisode] = React.useState(null);

	const { id } = useParams();

	React.useEffect(() => {
		(async function () {
			const episode = (await getEpisode(id))[0];

			console.log({ episode });

			setEpisode(episode);
		})();
	}, []);

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!episode}>
				Loading episode...
			</ActivityIndicator>

			{!!episode && (
				<React.Fragment>
					<Section>
						<DefaultGrid>
							<YouTubePlayer src={episode.youtube_video.url} />
							<AudioPlayer src={episode.audio_url.url} />
						</DefaultGrid>
						<TextGrid>
							<Heading>{episode.title}</Heading>
							<RichText render={episode.description} />
						</TextGrid>
						<TextGrid>
							<PodcastSubscribe />
							<Paragraph>
								<Link to="/podcast">← Back to podcast</Link>
							</Paragraph>
						</TextGrid>
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
