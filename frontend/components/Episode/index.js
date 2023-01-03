import { Heading, Paragraph, TextGroup } from "../Text";

import { AudioPlayer } from "./styles";
import DefaultGrid from "../Grid";
import React from "react";
import Section from "../Section";
import YouTubePlayer from "../YouTubePlayer";

export default ({ title, description, ...props }) => {
	return (
		!!props && (
			<React.Fragment>
				<Section>
					<DefaultGrid>
						<YouTubePlayer src={props.youtube_video.url} />
						<AudioPlayer src={props.audio_url.url} />
					</DefaultGrid>

					<TextGroup>
						<Heading>{title}</Heading>
						<Paragraph>{description}</Paragraph>
					</TextGroup>
				</Section>
			</React.Fragment>
		)
	);
};
