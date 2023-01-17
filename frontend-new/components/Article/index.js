import * as Author from "./Author";
import * as prismicR from "@prismicio/richtext";

import {
	BlockQuote,
	Caption,
	Heading,
	Paragraph,
	Subheading,
	TextGroup,
} from "../Text";

import DefaultGrid from "../Grid";
import { Image } from "./styles";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import Section from "../Section";

export default ({ title, description, author, content, ...props }) => {
	if (author && author.data) author = author.data;

	return (
		!!props && (
			<React.Fragment>
				<Section>
					<DefaultGrid>
						<Image src={props.image} />
					</DefaultGrid>

					<TextGroup>
						<Heading>{title}</Heading>
						<Caption
							style={{ marginTop: "-8px", marginBottom: "15px" }}
						>
							{author.name}
						</Caption>

						{/* <Author.Head>
							<img src={author.image.url} />
							<Paragraph>{author.name}</Paragraph>
						</Author.Head> */}

						<PrismicRichText
							field={content}
							components={{
								paragraph: ({ children }) => (
									<Paragraph serif>{children}</Paragraph>
								),
								heading2: ({ children }) => (
									<Subheading style={{ marginTop: "30px" }}>
										{children}
									</Subheading>
								),
								heading3: ({ children }) => (
									<BlockQuote serif>{children}</BlockQuote>
								),
								list: ({ children }) => (
									<Paragraph serif>
										<ul>{children}</ul>
									</Paragraph>
								),
							}}
						/>

						<Author.Foot>
							<img src={author.image.url} />
							<div>
								<Paragraph style={{ fontWeight: "bold" }}>
									{author.name}
								</Paragraph>
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
