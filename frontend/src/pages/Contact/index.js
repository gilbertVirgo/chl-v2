import * as Form from "../../components/Form";

import { Caption, Heading, Paragraph, Subheading } from "../../components/Text";

import Button from "../../components/Button";
import Grid from "../../components/Grid";
import { Image } from "./styles";
import React from "react";
import Section from "../../components/Section";
import categories from "./categories";
import { goTo } from "../../functions";
import { useHistory } from "react-router-dom";

export default ({
	match: {
		params: { category },
	},
}) => {
	const history = useHistory();

	const contact = {
		phone:
			category === "international-tour"
				? "+447528661048"
				: "+443000301785",
		email:
			category === "international-tour"
				? "ilona@christianheritagelondon.org"
				: "info@christianheritagelondon.org",
		physical:
			category === "international-tour" ? (
				<>
					33 Upper Meadows
					<br />
					Gerrards Cross
					<br />
					Bucks
					<br />
					SL9 7EY
					<br />
					United Kingdom
				</>
			) : (
				<>
					Christian Heritage London
					<br />
					ELT Baptist Church
					<br />
					Burdett Road
					<br />
					London
					<br />
					E3 4TU
				</>
			),
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const { target } = event;

		if (target.checkValidity()) {
			goTo(
				`mailto:${contact.email}?subject=${
					target.subject.options[target.subject.selectedIndex].text
				}&body=${encodeURI(`${target.body.value}
	
From ${target.name.value}`)}`
			);
		}
	};

	return (
		<Section explode>
			<Grid as="form" onSubmit={handleSubmit}>
				<Form.Group>
					<Heading>Contact Us</Heading>
					{category !== "report-problem" && (
						<React.Fragment>
							<Subheading>Got a question?</Subheading>
							<Paragraph>
								Don't hesitate to get in touch with us using the
								contact form provided.
							</Paragraph>
						</React.Fragment>
					)}
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="name">
						Your Name
					</Caption>
					<Form.Input
						required
						name="name"
						type="text"
						placeholder="e.g. John Doe"
					/>
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="subject">
						Subject
					</Caption>
					<Form.Select
						required
						name="subject"
						onChange={({ target }) =>
							history.push(
								`/contact/${
									target.options[target.selectedIndex].value
								}`
							)
						}
					>
						{categories.map(({ text, value }, index) => (
							<option
								selected={category === value}
								value={value}
								key={`select-option-${index}`}
							>
								{text}
							</option>
						))}
					</Form.Select>
				</Form.Group>
				<Form.Group>
					<Caption as="label" for="body">
						Message
					</Caption>
					<Form.Input
						required
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
					<Button icon="external" type="submit">
						Continue in your email client
					</Button>
				</Form.Group>

				<Form.Group>
					<Paragraph small>
						Or if you would prefer to email us without using this
						form, reach us at{" "}
						<a target="_blank" href={`mailto:${contact.email}`}>
							{contact.email}
						</a>{" "}
						or call us at{" "}
						<a href={`tel:${contact.phone}`}>{contact.phone}</a>.
					</Paragraph>
				</Form.Group>
				<Image />

				<Form.Group>
					<Subheading>Postal Address</Subheading>
					<Paragraph>{contact.physical}</Paragraph>
				</Form.Group>
			</Grid>
		</Section>
	);
};
