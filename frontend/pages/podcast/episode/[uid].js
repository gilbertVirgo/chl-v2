import { Heading, TextGroup } from "../../../components/Text";

import ActivityIndicator from "../../../components/ActivityIndicator";
import AudioPlayer from "../../../components/AudioPlayer";
import Grid from "../../../components/Grid";
import PodcastSubscribe from "../../../components/PodcastSubscribe";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../../../components/Section";
import YouTubePlayer from "../../../components/YouTubePlayer";
import { useRouter } from "next/router";

export default () => {
	const router = useRouter();
	const { id } = router.query;

	const [props] = usePrismicDocumentByUID("podcast", id);

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!props}>
				Loading...
			</ActivityIndicator>

			{!!props && (
				<React.Fragment>
					<Section>
						<Grid>
							<YouTubePlayer src={props.youtube_video.url} />
							<AudioPlayer src={props.audio_url.url} />
						</Grid>

						<TextGroup>
							<Heading>{props.title}</Heading>
							<RichText render={props.description} />
						</TextGroup>
					</Section>
					<Section>
						<PodcastSubscribe />
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
