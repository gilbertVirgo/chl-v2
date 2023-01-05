import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import ContentGrid from "../components/ContentGrid";
import Feature from "../components/Feature";
import Link from "next/link";
import { Paragraph } from "../components/Text";
import React from "react";
import Section from "../components/Section";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

export default () => {
	const [podcast] = useAllPrismicDocumentsByType("podcast", { pageSize: 4 });
	const [articles] = useAllPrismicDocumentsByType("article", { pageSize: 4 });

	const loading = !podcast || !articles;

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={loading} />

			<Section innerStyle={{ paddingTop: 0 }}>
				{!loading && (
					<ContentGrid singleRow deflate articles={podcast} />
				)}
				<Button theme="grey" href="podcast">
					See more episodes
				</Button>
			</Section>
			<Section innerStyle={{ paddingTop: 0 }} dark>
				{!loading && (
					<ContentGrid
						hasAuthor
						singleRow
						deflate
						articles={articles}
					/>
				)}
				<Button theme="grey" href="articles">
					See more articles
				</Button>
			</Section>

			<Section explode>
				<Feature invert>
					<Feature.Title>London Walks</Feature.Title>
					<Feature.Embed src="https://www.youtube.com/embed/iF2ozY92F9w" />
					<Feature.Body>
						<Paragraph>
							We give walks and tours through the City of London,
							Westminster, the British Museum, the National
							Gallery and the V&A Museum.
						</Paragraph>
						<Button href="/walks/apply" theme="red" suspend>
							Request a London Day
						</Button>
						<Paragraph small>
							Private tours are also available.{" "}
							<Link href="/contact/private-tour">
								Enquire about a private tour
							</Link>
						</Paragraph>
					</Feature.Body>
				</Feature>
			</Section>
		</React.Fragment>
	);
};
