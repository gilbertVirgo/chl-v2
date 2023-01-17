import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import ContentGrid from "../../components/ContentGrid";
import Feature from "../../components/Feature";
import { Link } from "react-router-dom";
import { Paragraph } from "../../components/Text";
import React from "react";
import Section from "../../components/Section";
import getBlog from "../Blog/getBlog";
import getPodcast from "../Podcast/getPodcast";

export default () => {
	const [podcast, setPodcast] = React.useState(null);
	const [blog, setBlog] = React.useState(null);

	React.useEffect(() => {
		(async function () {
			let { data: podcast } = await getPodcast({
				pageSize: 4,
				orderings: "[my.podcast.original_date_published desc]",
			});

			setPodcast(podcast);

			let { data: blog } = await getBlog({
				pageSize: 4,
				orderings: "[document.first_publication_date desc]",
			});

			setBlog(blog);

			console.log({ podcast, blog });
		})();
	}, []);

	const loading = !podcast || !blog;

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
					<ContentGrid hasAuthor singleRow deflate articles={blog} />
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
							<Link to="/contact/private-tour">
								Enquire about a private tour
							</Link>
						</Paragraph>
					</Feature.Body>
				</Feature>
			</Section>
		</React.Fragment>
	);
};
