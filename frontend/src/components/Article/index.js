import * as Author from "./Author";
import * as prismicR from "@prismicio/richtext";

import { AudioPlayer, BlockQuote, Image } from "./styles";
import { Heading, Paragraph, Subheading, TextGroup } from "../Text";

import DefaultGrid from "../Grid";
import { Link } from "react-router-dom";
import PodcastSubscribe from "../PodcastSubscribe";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../Section";
import YouTubePlayer from "../YouTubePlayer";

export default ({ title, description, author, content, ...props }) => {
	if (author && author.data) author = author.data;

	return (
		!!props && (
			<React.Fragment>
				<Section>
					<DefaultGrid>
						<Image src={props.image.url} />
					</DefaultGrid>

					<TextGroup>
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
					</TextGroup>
				</Section>
			</React.Fragment>
		)
	);
};
