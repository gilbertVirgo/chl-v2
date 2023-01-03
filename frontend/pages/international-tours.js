import { Heading, Paragraph } from "../../components/Text";

import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Lattice from "../../components/Lattice";
import React from "react";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";

const tours = [
	{
		title: "C. S. Lewis Tour",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/C.+S.+Lewis+Tour+3.pdf", // require("...")
		},
		image: require("../../assets/tours/cs-lewis.png"),
	},
	{
		title: "Discovering Italy",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/Discovering+Italy+3.pdf", // require("...")
		},
		image: require("../../assets/tours/discover-italy.png"),
	},
	{
		title: "European Odyssey",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/European+Odyssey+3.pdf", // require("...")
		},
		image: require("../../assets/tours/european-odyssey.png"),
	},
	// {
	// 	title: "Holy Land Starting in Jerusalem",
	// 	button: {
	// 		text: "View Guide",
	// 		icon: "external",
	// 		href: "", // require("...")
	// 	},
	// 	image: require("../../assets/london-cambridge.jpg"),
	// },
	{
		title: "Holy Land Tour",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/Holy+Land+Tour+2.pdf", // require("...")
		},
		image: require("../../assets/tours/holy-land.png"),
	},
	{
		title: "The Journeys of Paul",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/Journeys+of+Paul.pdf", // require("...")
		},
		image: require("../../assets/tours/journeys-of-paul.png"),
	},
	{
		title: "London, Cambridge and Paris",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/London%2C+Cambridge+and+Paris+3.pdf", // require("...")
		},
		image: require("../../assets/tours/oxford.png"),
	},
	{
		title: "London, Oxford, Cambridge and Edinburgh",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/London+Oxford+Cambridge+Edinburgh+3.pdf", // require("...")
		},
		image: require("../../assets/tours/edinburgh.png"),
	},
	{
		title: "Reformation Tour",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/Reformation+4.pdf", // require("...")
		},
		image: require("../../assets/tours/reformation.png"),
	},
	{
		title: "World Wars I and II",
		button: {
			text: "View Guide",
			icon: "external",
			href: "https://chlmedia.s3.eu-west-2.amazonaws.com/pdf/World+Wars+I+and+II+3.pdf", // require("...")
		},
		image: require("../../assets/tours/world-war.png"),
	},
];

export default () => (
	<React.Fragment>
		{/* <Section dark>
			<Hero>
				<Heading>International Tours</Heading>
				<Paragraph>
					When people talk about how the gospel can change the world
					they start talking about what God has done in London.
				</Paragraph>
			</Hero>
		</Section> */}
		<Section skinny>
			<Heading>International Tours</Heading>
			<Paragraph>
				The gospel of Jesus Christ is not advice, instructions or a
				philosophy, it&apos;s an announcement. It&apos;s the news that
				the living God has come, has lived with people in their sadness,
				weakness and rebellion and that he has come here{" "}
				<em>so that he can save</em>.
			</Paragraph>
			<br />
			<Paragraph>
				This is a historical fact. That historical event happened in a
				physical place and the event has changed the world.
			</Paragraph>
			<br />
			<Paragraph>
				Christian Heritage London gives tours through the places where
				Jesus Christ walked, where the Bible was written, where church
				history happened, where the Reformation broke out, where
				revivals changed nations—in Israel, Greece, Germany,
				Switzerland, France, Ireland and Britain.
			</Paragraph>
			<br />
			<Paragraph>
				These tours are given to groups and are arranged on a bespoke
				basis. Get in touch to make enquiries and to arrange bookings.
			</Paragraph>
			<br />

			<Button href="/contact/international-tours" theme="red" suspend>
				Enquire
			</Button>
		</Section>
		<Section>
			<Lattice squares panels={tours} />
		</Section>
	</React.Fragment>
);
