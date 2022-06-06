import { Heading, Paragraph, Subheading } from "../../components/Text";

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

		<Section skinny>
			<Heading>London Day</Heading>
			<Subheading>
				We give walking tours through London&apos;s church history and
				the British Museum to groups as small as four people.
			</Subheading>
			<Paragraph>
				There&apos;s amazing church history in the City of London with
				sites associated with Wilberforce, Tyndale, Wesley, Whitefield,
				Elizabeth Fry, John Newton and many others. Meanwhile in the
				British Museum there are items associated with Abraham,
				Hezekiah, Daniel, Esther, Nehemiah, Paul and others.
				<br />
				<br />A London Day includes a tour of the British Museum and a
				guided walk in the City of London.
			</Paragraph>
			<Button>Apply for a London Day</Button>
		</Section>
		<Section skinny>
			<Heading>Other Tours</Heading>
			<Subheading>
				Our other tours are the Gospel in Art in London&apos;s major art
				galleries, and The Influence of Christianity on the West in the
				V&amp;A.
			</Subheading>
			<Paragraph>
				If you would like to apply for one of these, or if you would
				like only a City Walk or a British Museum tour, or if you have
				any other questions please{" "}
				<a href="/contact/other-tour">get in touch</a>.
			</Paragraph>
		</Section>
	</React.Fragment>
);
