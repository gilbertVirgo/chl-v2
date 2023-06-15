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
						Christian Heritage London has a unique opportunity to
						tell people the gospel to large numbers of people. Many
						churches, families, universities and other groups bring
						believing and unbelieving friends on our walks and
						tours, and on each walk and tour we proclaim the gospel
						and illustrate how it has changed history.
					</Paragraph>
					<Paragraph>
						We are not supported by a denomination or network, and
						we have numerous overheads as well as opportunities.
					</Paragraph>
					<Paragraph>
						If you can help us to carry on and develop our ministry,
						telling the stories of God’s grace to greater numbers,
						please do support us in this work.
					</Paragraph>
				</Wrapper>
				<Wrapper
					area="image"
					image={require("../../assets/donate-new.jpg")}
				/>
				<Wrapper area="uk">
					<Subheading>Donating from the UK</Subheading>
					<Form.Group>
						<Paragraph>
							We have partnered with{" "}
							<a
								target="_blank"
								href="https://www.stewardship.org.uk/about-us"
							>
								Stewardship
							</a>{" "}
							for our UK-based donations.
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
					<br />
					<Form.Group>
						<Paragraph>
							If you would like to post a cheque, please post to:
						</Paragraph>
						<Paragraph>
							Christian Heritage London <br />
							ELT Baptist Church
							<br />
							Burdett Road
							<br />
							London <br />
							E3 4TU
						</Paragraph>
					</Form.Group>
				</Wrapper>
				<Wrapper area="overseas">
					<Subheading>Donating from the US</Subheading>
					<Form.Group>
						<Paragraph>
							To donate from the United States please post cheques
							to:
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
