import Button from "../components/Button";
import Feature from "../components/Feature";
import Lattice from "../components/Lattice";
import { Paragraph } from "../components/Text";
import React from "react";
import Section from "../components/Section";
import getEpisodes from "../api/getEpisodes";

export default () => {
	const [[firstEpisode, ...episodes], setEpisodes] = React.useState([]);

	React.useEffect(() => {
		(async function () {
			let episodes = await getEpisodes();

			console.log({ episodes });

			setEpisodes(
				episodes.sort(
					(a, b) => new Date(b.pubDate) - new Date(a.pubDate)
				)
			);
		})();
	}, []);

	return (
		<React.Fragment>
			<Section explode>
				<Feature invert>
					<Feature.Title>An Interview with Andrew Sach</Feature.Title>
					<Feature.Image src={require("../assets/andrew-sach.png")} />
					<Feature.Body>
						<Paragraph>
							We take small groups, families, church groups and
							others on walks and tours through some of the
							awesome London gospel stories.
						</Paragraph>
					</Feature.Body>
				</Feature>
				<Lattice
					singleRow
					panels={[
						{
							title: "An Interview with Jeremy Marshall",
							image: require("../assets/jeremy-marshall.png"),
						},
						{
							title: "An Interview with Dick Lucas",
							image: require("../assets/dick-lucas.png"),
						},
						{
							title: "An Interview with Jeremy Marshall",
							image: require("../assets/jeremy-marshall.png"),
						},
					]}
				/>
				<br />
				<Button theme="grey" href="podcast">
					More from the podcast
				</Button>
			</Section>
			<Section dark>
				<Feature invert>
					<Feature.Title>
						Five More Reasons to Read Your Bible
					</Feature.Title>
					<Feature.Image src={require("../assets/book.png")} />
					<Feature.Body>
						<Paragraph>
							We take small groups, families, church groups and
							others on walks and tours through some of the
							awesome London gospel stories.
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
							image: require("../assets/revival.png"),
						},
					]}
				/>
				<br />
				<Button theme="grey" href="articles">
					More articles
				</Button>
			</Section>
			<Section explode>
				<Feature invert>
					<Feature.Title>London Walks</Feature.Title>
					<Feature.Image src={require("../assets/walks.png")} />
					<Feature.Body>
						<Paragraph>
							We take small groups, families, church groups and
							others on walks and tours through some of the
							awesome London gospel stories.
						</Paragraph>
						<Button theme="red" suspend>
							Apply for a walk
						</Button>
					</Feature.Body>
				</Feature>
			</Section>
		</React.Fragment>
	);
};
