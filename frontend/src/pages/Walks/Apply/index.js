import * as Form from "../../../components/Form";

import {
	Caption,
	Heading,
	Paragraph,
	Subheading,
} from "../../../components/Text";

import Button from "../../../components/Button";
import Grid from "../../../components/Grid";
import { Image } from "./styles";
import React from "react";
import Section from "../../../components/Section";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();

		const { target } = event;

		if (target.checkValidity()) {
			history.push("/");
		}
	};

	return (
		<Section explode>
			<Grid as="form" onSubmit={handleSubmit}>
				<Form.Group>
					<Heading>Apply</Heading>
					<Subheading>Apply for a London Day</Subheading>
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="name">
						Your Name
					</Caption>
					<Form.Input required name="name" type="text" />
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="email">
						Your Email
					</Caption>
					<Form.Input
						required
						name="email"
						type="email"
						placeholder="e.g. example@example.com"
					/>
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="date">
						Requested Date
					</Caption>
					<Form.Input required name="date" type="date" />
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="groupSize">
						Number of Guests (can be approximate)
					</Caption>
					<Form.Input required name="groupSize" type="number" />
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="comments">
						Comments or Questions
					</Caption>
					<Form.Input
						required
						as="textarea"
						name="comments"
						style={{
							height: "auto",
							resize: "vertical",
							minHeight: "120px",
							maxHeight: "300px",
						}}
					/>
				</Form.Group>
				{/* Ts and Cs */}
				{/* Captcha */}
				<Form.Group>
					<Button type="submit">Apply for a booking</Button>
				</Form.Group>

				<Form.Group>
					<Paragraph small>
						You will recieve an email to confirm wether your
						application has been successful, and we will be in touch
						regarding timings and locations for meeting.
					</Paragraph>
				</Form.Group>
				<Image />
			</Grid>
		</Section>
	);
};
