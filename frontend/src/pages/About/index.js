import { Banner, Names, Text } from "./styles";
import { Heading, Paragraph, Subheading } from "../../components/Text";

import Grid from "../../components/Grid";
import Hero from "../../components/Hero";
import Lattice from "../../components/Lattice";
import React from "react";
import Section from "../../components/Section";

export default () => (
	<React.Fragment>
		<Section dark>
			<Hero>
				<Heading>About Us</Heading>
				<Paragraph>
					When people talk about how the gospel can change the world{" "}
					<em>
						they start talking about what God has done in London
					</em>
					.
				</Paragraph>
			</Hero>
		</Section>
		<Section skinny>
			<Subheading>
				When people talk about how the gospel of Jesus Christ can change
				the world, they start talking about London.
			</Subheading>
			<Paragraph>
				William Wilberforce, Charles Spurgeon, George Whitefield,
				Elizabeth Fry, John Wycliffe, John Wesley and many, many others
				have been caught up by God&apos;s grace in this city, and have
				invested themselves for his glory here. Their stories have
				inspired people all over the world.
			</Paragraph>
			<Paragraph>
				London is home to extraordinary museums and galleries whose
				collections contain actual bible items, ancient bible texts, and
				other awesome items which demonstrate and illustrate the
				influence of the gospel on the world.
			</Paragraph>
			<Paragraph>
				Christian Heritage London gives <strong>tours</strong> through
				these, and gives <strong>walks</strong> through London, by
				telling their stories through walks, tours, events, podcasts and
				videos.
			</Paragraph>
		</Section>
		<Section explode>
			<Heading margin>Team</Heading>
			<Lattice
				style={{ rowGap: "45px" }}
				circles
				panels={[
					{
						title: "Ben Virgo",
						subtitle: "Director, Speaker, Guide",
						image: require("../../assets/team/ben-virgo.jpg"),
						description:
							"Studied Classics at University College London. Church planting in East London.",
					},
					{
						title: "Peter Greyling",
						subtitle: "Guide, Trustee",
						image: require("../../assets/team/peter-greyling.jpg"),
						description:
							"Studied Economics at the University of Natal, South Africa. Worships at All Souls Langham Place.",
					},
					{
						title: "Ilona Greyling",
						subtitle: "Director of Tours, Guide",
						image: require("../../assets/team/ilona-greyling.jpg"),
						description:
							"Studied at the Durban University of Technology. Worships at All Souls Langham Place.",
					},
					{
						title: "Ken Brownell",
						subtitle: "Speaker, Guide, Trustee",
						image: require("../../assets/team/ken-brownell.jpg"),
						description:
							"Studied at Harvard University and St Andrews University. Church History lecturer, London Seminary; former pastor East London Tabernacle Baptist Church (retired).",
					},
				]}
			/>
		</Section>
	</React.Fragment>
);
