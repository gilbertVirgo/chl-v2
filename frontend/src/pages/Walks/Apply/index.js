import "react-datepicker/dist/react-datepicker.css";

import * as Form from "../../../components/Form";

import {
	Caption,
	Heading,
	Paragraph,
	Subheading,
} from "../../../components/Text";

import ActivityIndicator from "../../../components/ActivityIndicator";
import Button from "../../../components/Button";
import Grid from "../../../components/Grid";
import { Image } from "./styles";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import { ReCAPTCHA } from "react-google-recaptcha";
import React from "react";
import Section from "../../../components/Section";
import Tip from "../../../components/Tip";
import formStructure from "./formStructure";
import parseFieldsForPost from "./helpers/parseFieldsForPost";
import put from "../../../api/booking-system/put";

export default () => {
	const isBackendOnline = true;

	const form = React.useRef(null);

	const [fields, setFields] = React.useState(formStructure);
	const [showModal, setShowModal] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [responseText, setResponseText] = React.useState("");
	const [formValid, setFormValid] = React.useState(false);

	const handleChangeField = (name, fromInput) => {
		let value = fromInput;

		if (fromInput.hasOwnProperty("target")) value = fromInput.target.value;

		setFields((fields) =>
			fields.map((field) => {
				if (field.name !== name) return field;

				field.value = value;
				return field;
			})
		);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { target } = event;

		if (target.checkValidity()) {
			setLoading(true);

			console.log("ready to send", parseFieldsForPost(fields));

			// TODO - Build an error modal
			await put("/booking", parseFieldsForPost(fields)).catch(
				console.error
			);

			setLoading(false);
		}
	};

	React.useEffect(() => {
		if (form.current) {
			setFormValid(form.current.checkValidity());
		}
	}, [fields]);

	React.useEffect(() => {
		if (loading) {
			setShowModal(true);
		} else {
			setTimeout(() => setShowModal(false), 2000);
		}
	}, [loading]);

	return (
		<React.Fragment>
			<Modal show={showModal}>
				{loading ? (
					<React.Fragment>
						<ActivityIndicator active>Loading...</ActivityIndicator>
					</React.Fragment>
				) : (
					<Paragraph>{responseText}</Paragraph>
				)}
			</Modal>
			<Section explode>
				<Grid as="form" onSubmit={handleSubmit} ref={form}>
					<Form.Group>
						<Heading>Apply</Heading>
						<Subheading>Apply for a London Day</Subheading>
					</Form.Group>

					{isBackendOnline ? (
						<React.Fragment>
							{fields.map(
								(
									{
										label,
										required,
										Element = Form.Input,
										tip,
										name,
										value,
										...inputProps
									},
									index
								) => (
									<Form.Group
										key={`fg-${index}`}
										style={{ gridTemplateColumns: "1fr" }}
									>
										<Caption
											as="label"
											htmlFor={name}
											style={{ gridColumn: "1 / -1" }}
										>
											{label}{" "}
											{required && <Form.Required />}
										</Caption>
										{tip && <Tip>{tip}</Tip>}
										<Element
											{...{
												required,
												name,
												...inputProps,
											}}
											value={value || ""}
											onChange={handleChangeField.bind(
												null,
												name
											)}
										/>
									</Form.Group>
								)
							)}
							<Form.Group>
								<ReCAPTCHA
									sitekey="6LerWZkUAAAAABke7MMkRINL7lpgTXTjyD10zWtW"
									grecaptcha={window.grecaptcha}
								/>
							</Form.Group>

							<Form.Group
								title={
									!formValid
										? "Please fill in all the required fields"
										: ""
								}
							>
								<Button disabled={!formValid} type="submit">
									Apply
								</Button>
							</Form.Group>
							<Form.Group>
								<Paragraph small>
									By applying for a London Day, you agree to
									our{" "}
									<Link to="/privacy">
										terms and conditions
									</Link>{" "}
									regarding the data that you have provided.
								</Paragraph>
								<Paragraph small>
									You will recieve an email to confirm whether
									your application has been successful, and we
									will be in touch regarding timings and
									locations for meeting.
								</Paragraph>
							</Form.Group>
						</React.Fragment>
					) : (
						<Form.Group>
							<Paragraph>
								We are currently experiencing problems with our
								booking system. If you would like to book a
								walk, please use our{" "}
								<Link to="/contact">contact form</Link> to apply
								for a London Day manually.
							</Paragraph>
						</Form.Group>
					)}
					<Image />
				</Grid>
			</Section>
		</React.Fragment>
	);
};
