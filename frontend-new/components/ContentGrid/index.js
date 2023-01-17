import Feature from "../Feature";
import Lattice from "../Lattice";
import { Paragraph } from "../Text";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../Section";
import ellipsize from "ellipsize";

// Each article must have the following props...
// title, href, image, description

export default ({
	articles: [firstArticle, ...articles],
	strapline,
	nextPage,
	onNextPage,
	filterImages,
	singleRow,
	deflate,
	hasAuthor,
}) => {
	return (
		<React.Fragment>
			<Section>
				<Feature hasAuthor={hasAuthor} invert>
					<Feature.Title>{firstArticle.title}</Feature.Title>
					{firstArticle.author && (
						<Feature.Author>
							{firstArticle.author.name}
						</Feature.Author>
					)}
					<Feature.Image
						filter={filterImages}
						href={firstArticle.href}
						src={firstArticle.image}
					/>
					<Feature.Body>
						<Paragraph>
							{ellipsize(
								RichText.asText(firstArticle.description),
								120
							)}
						</Paragraph>
					</Feature.Body>
				</Feature>
			</Section>
			{!!strapline && <Section deflate>{strapline}</Section>}
			<Section deflate={deflate}>
				<Lattice
					filterImages={filterImages}
					singleRow={singleRow}
					panels={articles.map(
						({ id, title, author, image, href }) => ({
							title,
							author: author && author.name,
							image: image,
							href,
						})
					)}
				/>
				{!!nextPage && (
					<a href="javascript:void(0)" onClick={onNextPage}>
						<Paragraph style={{ textAlign: "center" }}>
							Load more...
						</Paragraph>
					</a>
				)}
			</Section>
		</React.Fragment>
	);
};
