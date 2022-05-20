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
							"Studied at Harvard University and St Andrews University. Pastor of East London Tabernacle Baptist Church.",
					},
					{
						title: "Stuart Currie",
						subtitle: "Speaker, Guide",
						image: require("../../assets/team/stuart-currie.jpg"),
						description:
							"Studied Art at the University of Kingston, University of Leicester and the University of London.",
					},
				]}
			/>
		</Section>
	</React.Fragment>
);
