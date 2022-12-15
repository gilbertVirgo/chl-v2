import { AudioPlayer, Image, TextGrid } from "./styles";
import { Heading, Paragraph } from "../Text";

import DefaultGrid from "../Grid";
import { Link } from "react-router-dom";
import PodcastSubscribe from "../PodcastSubscribe";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../Section";
import YouTubePlayer from "../YouTubePlayer";

export default ({ title, description, content, ...props }) => {
	return !!props && (
				<React.Fragment>
					<Section>
						<DefaultGrid>
							{props.youtube_video ? (
								<YouTubePlayer src={props.youtube_video.url} />
							) : (
								props.image && <Image src={props.image.url} />
							)}
							{props.audio_url && (
								<AudioPlayer src={props.audio_url.url} />
							)}
						</DefaultGrid>

						<TextGrid>
							<Heading>{title}</Heading>
							<RichText render={content} />
						</TextGrid>
						{/* <TextGrid>
							<PodcastSubscribe />
							<Paragraph>
								<Link to="/podcast">← Back to podcast</Link>
							</Paragraph>
						</TextGrid> */}
					</Section>
				</React.Fragment>
	);
};
