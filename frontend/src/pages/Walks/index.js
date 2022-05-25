import { Heading, Paragraph } from "../../components/Text";

import Button from "../../components/Button";
import Feature from "../../components/Feature";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import React from "react";
import Section from "../../components/Section";

export default () => (
	<React.Fragment>
		<Section dark>
			<Hero>
				<Heading>Walks &amp; Tours</Heading>
				<Paragraph>
					Christian Heritage London take people on walks to display
					some of the wonderful gospel history that can be found in
					London.
				</Paragraph>
			</Hero>
		</Section>
		<Section explode>
			<Feature>
				<Feature.Image src={require("../../assets/walks-1.jpg")} />
				<Feature.Title>London Day</Feature.Title>
				<Feature.Body>
					<Paragraph style={{ marginBottom: "30px" }}>
						We take small groups, families, church groups and others
						on walks and tours through some of the awesome London
						gospel stories.
					</Paragraph>
					<Button>Apply for a London Day</Button>
				</Feature.Body>
			</Feature>
			<Feature invert>
				<Feature.Image src={require("../../assets/walks-2.jpg")} />
				<Feature.Title>Other Tours</Feature.Title>
				<Feature.Body>
					<Paragraph style={{ marginBottom: "30px" }}>
						Our other tours are the Gospel in Art in London&apos;s
						major art galleries, and The Influence of Christianity
						on the West in the V&amp;A.
						<br />
						<br />
						If you would like to apply for one of these, or if you
						would like only a City Walk or a British Museum tour, or
						if you have any other questions please{" "}
						<Link to="contact">email</Link>.
					</Paragraph>
				</Feature.Body>
			</Feature>
		</Section>
	</React.Fragment>
);
