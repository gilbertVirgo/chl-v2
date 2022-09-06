import Button from "../../../components/Button";
import Feature from "../../../components/Feature";
import Lattice from "../../../components/Lattice";
import { Paragraph } from "../../../components/Text";
import React from "react";
import Section from "../../../components/Section";

export default ({ onLoad }) => {
	const [[firstArticle, ...articles], setArticles] = React.useState([]);

	React.useEffect(() => {
		(async function () {
			let { data: articles } = await getPodcast({
				pageSize: 4,
				orderings: "[my.podcast.original_date_published desc]",
			});

			console.log({ articles });

			setArticles(articles);
		})();
	}, []);

	React.useEffect(() => {
		if (articles.length) onLoad();
	}, [articles]);

	return (
		<Section dark>
			<Feature invert>
				<Feature.Title>
					Five More Reasons to Read Your Bible
				</Feature.Title>
				<Feature.Image src={require("../assets/book.png")} />
				<Feature.Body>
					<Paragraph>
						We take small groups, families, church groups and others
						on walks and tours through some of the awesome London
						gospel stories.
					</Paragraph>
				</Feature.Body>
			</Feature>
			<Lattice
				singleRow
				panels={[
					{
						title: "What Calvin Said About Money",
						subtitle: "Andrew Sach",
						image: require("../assets/money.png"),
					},
					{
						title: "Five Lessons from Dick Lucas",
						subtitle: "Kenneth Brownell",
						image: require("../assets/dick-lucas.png"),
					},
					{
						title: "Why You Should Read Revival",
						subtitle: "Glen Scrivener",
						image: require("../assets/dick-lucas.png"),
					},
				]}
			/>
			<br />
			<Button theme="grey" href="articles">
				More articles
			</Button>
		</Section>
	);
};
