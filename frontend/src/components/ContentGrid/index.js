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
	sectionBreak,
	nextPage,
	onNextPage,
	filterImages,
	singleRow,
	deflate,
}) => {
	console.log(articles);

	return (
		<React.Fragment>
			<Section explode={!!sectionBreak}>
				<Feature invert>
					<Feature.Title>{firstArticle.title}</Feature.Title>
					{firstArticle.author && (
						<Feature.Author>{firstArticle.author}</Feature.Author>
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
			{!!sectionBreak && <Section deflate>{sectionBreak}</Section>}
			<Section explode={!!sectionBreak} deflate={deflate}>
				<Lattice
					filterImages={filterImages}
					singleRow={singleRow}
					panels={articles.map(({ title, image, href }) => ({
						title,
						image,
						href,
					}))}
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
