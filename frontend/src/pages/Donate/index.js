import * as Form from "../../components/Form";

import { Grid, Wrapper } from "./styles";
import { Heading, Paragraph, Subheading } from "../../components/Text";

import Button from "../../components/Button";
import React from "react";
import Section from "../../components/Section";

export default () => {
	const handleCopyDetails = () => {
		navigator.permissions
			.query({ name: "clipboard-write" })
			.then((result) => {
				if (result.state == "granted" || result.state == "prompt") {
					navigator.clipboard.writeText(
						"Christian Heritage (USA) Foundation, PO Box 11651, Montgomery, Alabama, 36111"
					);
				}
			});
	};

	return (
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
						But in order to do this, we rely on support from
						believers like you, who care about bringing gospel light
						to the internet and helping people think wisely and
						biblically.
					</Paragraph>
				</Wrapper>
				<Wrapper
					area="image"
					image={require("../../assets/donate.jpg")}
				/>
				<Wrapper area="uk">
					<Subheading>Donating from the UK</Subheading>
					<Form.Group>
						<Paragraph>
							We have chosen to partner with Stewardship for our
							UK-based donations.
						</Paragraph>
					</Form.Group>
					<Form.Group>
						<Button
							external
							href="https://www.stewardship.org.uk/partners/20176177"
							icon="external"
						>
							Donate via Stewardship
						</Button>
					</Form.Group>
					<Form.Group>
						<Paragraph small>
							<a
								target="_blank"
								href="https://www.stewardship.org.uk/about-us"
							>
								Stewardship
							</a>{" "}
							was created by a small group of Christians uniting
							to release generous gifts and financial support to
							Christian ministries in the UK and overseas.
						</Paragraph>
					</Form.Group>
				</Wrapper>
				<Wrapper area="overseas">
					<Subheading>Donating from overseas</Subheading>
					<Form.Group>
						<Paragraph>
							For donations from overseas, please use the details
							provided below.
						</Paragraph>
						<Paragraph>
							Christian Heritage (USA) Foundation
							<br />
							PO Box 11651
							<br />
							Montgomery
							<br />
							Alabama
							<br />
							36111
						</Paragraph>
					</Form.Group>
					<Button onClick={handleCopyDetails}>
						Copy our details
					</Button>
				</Wrapper>
			</Grid>
		</Section>
	);
};
