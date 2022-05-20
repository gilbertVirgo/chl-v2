import { Caption, Heading, Paragraph } from "../../components/Text";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Grid from "../../components/Grid";
import React from "react";
import Section from "../../components/Section";
import { goTo } from "../../functions";

export default () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const { target } = event;

		goTo(
			`mailto:info@christianheritagelondon.org?subject=${
				target.subject.value
			}&body=${encodeURI(`${target.body.value}
	
From ${target.name.value}`)}`
		);
	};

	return (
		<React.Fragment>
			<Section>
				<Grid as="form" onSubmit={handleSubmit}>
					<Form.Group>
						<Heading>Contact Us</Heading>
						<Paragraph>
							Got a question? Don't hesitate to get in touch with
							us using the contact form provided.
						</Paragraph>
					</Form.Group>
					<Form.Group>
						<Caption as="label" for="name">
							Your Name
						</Caption>
						<Form.Input
							name="name"
							type="text"
							placeholder="e.g. John Doe"
						/>
					</Form.Group>
					<Form.Group>
						<Caption as="label" for="subject">
							Subject
						</Caption>
						<Form.Input name="subject" type="text" />
					</Form.Group>
					<Form.Group>
						<Caption as="label" for="body">
							Message
						</Caption>
						<Form.Input
							as="textarea"
							name="body"
							style={{
								height: "auto",
								resize: "vertical",
								minHeight: "120px",
								maxHeight: "300px",
							}}
						/>
					</Form.Group>
					<Form.Group>
						<Button external type="submit">
							Continue in your email client
						</Button>
					</Form.Group>
				</Grid>
			</Section>
		</React.Fragment>
	);
};
