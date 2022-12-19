import { Heading, Paragraph, TextGroup } from "../../../components/Text";

import ActivityIndicator from "../../../components/ActivityIndicator";
import Article from "../../../components/Article";
import AudioPlayer from "../../../components/AudioPlayer";
import Grid from "../../../components/Grid";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../../../components/Section";
import YouTubePlayer from "../../../components/YouTubePlayer";
import getEpisode from "./getEpisode";
import { useParams } from "react-router-dom";

export default () => {
	const [props, setProps] = React.useState(null);

	const { id } = useParams();

	React.useEffect(() => {
		(async function () {
			const props = (await getEpisode(id)).data[0];

			setProps(props);
		})();
	}, []);

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
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
