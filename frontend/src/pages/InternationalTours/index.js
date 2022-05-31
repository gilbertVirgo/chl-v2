import { Heading, Paragraph } from "../../components/Text";

import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Lattice from "../../components/Lattice";
import React from "react";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";

export default () => (
	<React.Fragment>
		<Section dark>
			<Hero>
				<Heading>International Tours</Heading>
				<Paragraph>
					When people talk about how the gospel can change the world
					they start talking about what God has done in London.
				</Paragraph>
			</Hero>
		</Section>
		<Section explode>
			<Strapline>
				On the Christian Heritage London podcast we meet Christian
				leaders who serve the church in the purpose, perspective and
				power of the gospel.
			</Strapline>
			<Button center href="/contact/international-tour">
				Enquire
			</Button>
		</Section>
		<Section innerStyle={{ paddingTop: "0" }}>
			<Lattice
				squares
				panels={Array(9).fill({
					title: "London & Cambridge",
					button: {
						text: "View Guide",
						icon: "external",
						href: "https://www.christianheritagelondon.org/pdf/london-cambridge.pdf",
					},
					image: require("../../assets/london-cambridge.jpg"),
				})}
			/>
		</Section>
	</React.Fragment>
);
