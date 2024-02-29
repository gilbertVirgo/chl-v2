import * as Form from "../components/Form";

import Button from "../components/Button";
import { Caption } from "../components/Text";
import Grid from "../components/Grid";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";
import Section from "../components/Section";
import parseMailchimpSubscribeStatus from "../parseMailchimpSubscribeStatus";

export default () => {
	const [fields, setFields] = React.useState([
		{
			label: "Your first name",
			name: "firstname",
			type: "text",
			value: "",
			required: true,
		},
		{
			label: "Your last name",
			name: "lastname",
			type: "text",
			value: "",
			required: true,
		},
		{
			label: "Your email",
			name: "newsletter-subcribe-email",
			type: "email",
			value: "",
			required: true,
		},
		{
			label: "Recieve our newsletter",
			name: "subscribe",
			type: "checkbox",
		},
	]);

	const handleChangeField = (name, newValue) =>
		setFields((fields) =>
			fields.map(({ value, ...props }) => ({
				value: props.name === name ? newValue : value,
			}))
		);

	const handleSubmit = (event, mailchimpSubscribe) => {
		event.preventDefault();

		if (event.target.checkValidity()) {
		}
	};

	return (
		<Section explode>
			<MailchimpSubscribe
				url="//christianheritagelondon.us9.list-manage.com/subscribe/post?u=f18c1c82b624be730c499657e&amp;id=a75d3fa84b&amp;f_id=00f607e1f0"
				render={({ subscribe, status, message }) => (
					<Grid
						as="form"
						onSubmit={handleSubmit.bind(null, subscribe)}
					>
						{fields.map(({ name, label, ...props }) => (
							<Form.Group>
								<Caption as="label" htmlFor={name}>
									{label}
								</Caption>
								<Form.Input
									{...props}
									placeholder="e.g. John Doe"
									onChange={({ target: { value } }) =>
										handleChangeField.bind(
											null,
											name,
											value
										)
									}
								/>
							</Form.Group>
						))}
						<Button type="submit">Submit</Button>
						{parseMailchimpSubscribeStatus(status, message)}
					</Grid>
				)}
			/>
		</Section>
	);
};
