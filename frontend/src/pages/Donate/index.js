import { Grid, Wrapper } from "./styles";
import { Heading, Paragraph, Subheading } from "../../components/Text";

import Button from "../../components/Button";
import React from "react";
import Section from "../../components/Section";

export default () => (
	<Section explode>
		<Grid>
			<Wrapper area="intro">
				<Heading>Donate</Heading>
				<Subheading>
					Thank you for your interest in making a gift today.
				</Subheading>
				<Paragraph>
					We are committed to equipping the church to grow wise,
					faithful Christian disciples in a chaotic age.
				</Paragraph>
				<Paragraph>
					But in order to do this, we rely on support from believers
					like you, who care about bringing gospel light to the
					internet and helping people think wisely and biblically.
				</Paragraph>
			</Wrapper>
			<Wrapper area="image" image={require("../../assets/donate.jpg")} />
			<Wrapper area="uk">
				<Subheading>Donating from the UK</Subheading>
				<Paragraph>
					We have chosen to partner with Stewardship for our UK-based
					donations.
				</Paragraph>
				<Paragraph>
					Stewardship was created by a small group of Christians
					uniting to release generous gifts and financial support to
					Christian ministries in the UK and overseas.
				</Paragraph>
				<Button external>Donate via Stewardship</Button>
			</Wrapper>
			<Wrapper area="overseas">
				<Subheading>Donating from overseas</Subheading>
				<Paragraph>
					For donations from overseas, please use the details provided
					below.
				</Paragraph>
				<Paragraph>
					Christian Heritage London
					<br />
					23823823
					<br />
					10-20-10
				</Paragraph>
				<Button external>Copy our details</Button>
			</Wrapper>
		</Grid>
	</Section>
);
