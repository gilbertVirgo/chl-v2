import { Heading, Paragraph, Subheading } from "../components/Text";

import Button from "../components/Button";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import HorizontalRule from "../components/HorizontalRule";
import Lattice from "../components/Lattice";
import { Link } from "react-router-dom";
import React from "react";
import Strapline from "../components/Strapline";

const latticeItems = [
	{
		title: "Book Review: Revival",
		subtitle: "Book Review",
		image: require("../assets/revival.png"),
	},
	{
		title: "Book Review: Revival",
		subtitle: "Book Review",
		image: require("../assets/revival.png"),
	},
	{
		title: "Book Review: Revival",
		subtitle: "Book Review",
		image: require("../assets/revival.png"),
	},
	{
		title: "Book Review: Revival",
		image: require("../assets/revival.png"),
	},
	{
		title: "Book Review: Revival",
		subtitle: "Book Review",
		image: require("../assets/revival.png"),
	},
	{
		title: "Book Review: Revival",
		subtitle: "Book Review",
		image: require("../assets/revival.png"),
	},
];

export default () => {
	return (
		<React.Fragment>
			<Hero>
				<Heading>London's Stories...</Heading>
				<Paragraph>
					When people talk about how the gospel can change the world
					they start talking about <i>what God has done in London</i>.
				</Paragraph>
			</Hero>
			<Strapline>
				Christian Heritage London exists to draw attention to the
				advances of the gospel in this city&apos;s history in order to
				bless the present and shape the future.
			</Strapline>
			<Feature>
				<Feature.Title>London Walks</Feature.Title>
				<Feature.Image src={require("../assets/walks.png")} />
				<Feature.Body>
					<Paragraph>
						We take small groups, families, church groups and others
						on walks and tours through some of the awesome London
						gospel stories.
					</Paragraph>
					<Button suspend>Book a walk</Button>
				</Feature.Body>
			</Feature>
			<HorizontalRule />
			<Feature inverted>
				<Feature.Title>An Interview with Andrew Sach</Feature.Title>
				<Feature.Image src={require("../assets/andrew-sach.png")} />
				<Feature.Body>
					<Subheading>Podcast</Subheading>
					<Button suspend dropdown>
						Listen to the Podcast
					</Button>
				</Feature.Body>
			</Feature>
			<Feature>
				<Feature.Title>
					Martin Luther: Lecture on Galatians
				</Feature.Title>
				<Feature.Image src={require("../assets/luther.jpeg")} />
				<Feature.Body>
					<Subheading>Blog</Subheading>
					<Paragraph>
						We take small groups, families, church groups and others
						on walks and tours through some of the awesome London
						gospel stories.
						<br />
						<br />
						<Link to="">Read the full article</Link>
					</Paragraph>
				</Feature.Body>
			</Feature>
			<Lattice panels={latticeItems} />
		</React.Fragment>
	);
};
