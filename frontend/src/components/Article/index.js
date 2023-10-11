import * as Author from "./Author";
import * as prismicR from "@prismicio/richtext";

import { BlockQuote, Image } from "./styles";
import { Caption, Heading, Paragraph, Subheading, TextGroup } from "../Text";

import DefaultGrid from "../Grid";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import Section from "../Section";

export default ({ title, description, image, author, content, ...props }) => {
	if (author && author.data) author = author.data;

	return (
		!!props && (
			<React.Fragment>
				<Section>
					<DefaultGrid>
						<Image src={image.url} />
					</DefaultGrid>

					<TextGroup>
						<Heading>{title}</Heading>

						<Author.Head>
							<img src={author.image.url} />
							<Caption large>{author.name}</Caption>
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
								list: ({ children }) => (
									<Paragraph>
										<ul>{children}</ul>
									</Paragraph>
								),
							}}
						/>

						<Author.Foot>
							<img src={author.image.url} />
							<div>
								<Caption large>{author.name}</Caption>
								<Paragraph>
									{prismicR.asText(author.description)}
								</Paragraph>
							</div>
						</Author.Foot>
					</TextGroup>
				</Section>
			</React.Fragment>
		)
	);
};
