import Button from "../components/Button";
import ContentGrid from "../components/ContentGrid";
import Feature from "../components/Feature";
import Link from "next/link";
import { Paragraph } from "../components/Text";
import React from "react";
import Section from "../components/Section";
import { createClient } from "../prismicio";
import parseMany from "../scripts/parseMany";
import parseResults from "../../frontend/prismic/parseResults";

export default ({ podcast, articles }) => {
	console.log({ podcast, articles });

	return (
		<React.Fragment>
			<Section innerStyle={{ paddingTop: 0 }}>
				<ContentGrid singleRow deflate articles={podcast} />
				<Button theme="grey" href="podcast">
					See more episodes
				</Button>
			</Section>
			<Section innerStyle={{ paddingTop: 0 }} dark>
				<ContentGrid hasAuthor singleRow deflate articles={articles} />

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

export async function getStaticProps() {
	const client = createClient();

	const podcast = await client.getByType("podcast", {
		pageSize: 4,
	});

	const articles = await client.getByType("article", {
		graphQuery: `{
	article {
		title
		image
		description
		author {
			name
			description
			image
		}
	}
}`,
		pageSize: 4,
	});

	return {
		props: {
			articles: parseMany(articles.results).asArticles(),
			podcast: parseMany(podcast.results).asEpisodes(),
		},
	};
}
