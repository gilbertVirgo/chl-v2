import * as Author from "./Author";
import * as prismicR from "@prismicio/richtext";

import { AudioPlayer, BlockQuote, Image, TextGrid } from "./styles";
import { Heading, Paragraph, Subheading } from "../Text";

import DefaultGrid from "../Grid";
import { Link } from "react-router-dom";
import PodcastSubscribe from "../PodcastSubscribe";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../Section";
import YouTubePlayer from "../YouTubePlayer";

export default ({
	title,
	description,
	author: { data: author },
	content,
	...props
}) => {
	console.log({ author });

	return (
		!!props && (
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
						<Author.Head>
							<img src={author.image.url} />
							<Paragraph>{author.name}</Paragraph>
						</Author.Head>
						<PrismicRichText
							field={content}
							components={{
								heading2: ({ children }) => (
									<Subheading>{children}</Subheading>
								),
								heading3: ({ children }) => (
									<BlockQuote>{children}</BlockQuote>
								),
							}}
						/>

						<Author.Foot>
							<img src={author.image.url} />
							<Paragraph>
								<strong>{author.name}</strong>
								<br />
								{prismicR.asText(author.description)}
							</Paragraph>
						</Author.Foot>
					</TextGrid>
					{/* <TextGrid>
							<PodcastSubscribe />
							<Paragraph>
								<Link to="/podcast">← Back to podcast</Link>
							</Paragraph>
						</TextGrid> */}

					{/* Now just style this bad boy! and
					
					- Remove about us/international tours videos
					*/}
				</Section>
			</React.Fragment>
		)
	);
};
