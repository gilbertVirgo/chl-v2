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
import DatePicker from "react-datepicker";
import Grid from "../../../components/Grid";
import { Image } from "./styles";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import { ReCAPTCHA } from "react-google-recaptcha";
import React from "react";
import Section from "../../../components/Section";
import datetime from "date-and-time";

export default () => {
	const isBackendOnline = true;

	const [requestedDate, setRequestedDate] = React.useState();
	const [client, setClient] = React.useState({
		name: "",
		email: "",
		tel: "",
		groupSize: "",
		comments: "",
	});

	const [showModal, setShowModal] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [responseText, setResponseText] = React.useState("");

	const handleClientChange = ({ target: { name, value } }) =>
		setClient((currentForm) => ({ ...currentForm, [name]: value }));

	const formatDateToSend = (date) => {
		// My old backend code is making me bend over backwards here...
		// It's making me go .toJSON -> d/m/y.

		console.log("untarnished", { date });
		console.log("formatted", datetime.format(date, "DD/MM/YYYY"));

		//const [y, m, d] = datetime.format(date, "DD/MM/YYYY").split("T")[0].split("-");

		return datetime.format(date, "DD/MM/YYYY");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { target } = event;

		if (target.checkValidity()) {
			setLoading(true);

			const body = JSON.stringify({
				client: {
					firstname: client.name.split(" ")[0],
					lastname: client.name.split(" ")[1] || "",
					...client,
				},
				event: {
					summary: `LD, ${client.name}`,
					description: `Client contact info:, \nTel: ${
						client.tel || "[N/A]"
					}, \nEmail: ${client.email}, \nGroup Size: ${
						client.groupSize
					}, \nComments: ${client.comments || "[N/A]"}`,
					date: formatDateToSend(requestedDate),
				},
				"g-recaptcha-response": window.grecaptcha.getResponse(),
			});

			console.log("POSTing the following", body);

			const req = await fetch(
				"https://api.christianheritagelondon.org/api/v1/booking",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body,
				}
			);

			let responseText = await req.text();

			// Had an issue with things coming back in quotes....
			setResponseText(responseText.replace(/"/g, ""));
			setLoading(false);
		}
	};

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
				<Grid as="form" onSubmit={handleSubmit}>
					<Form.Group>
						<Heading>Request</Heading>
						<Subheading>Request a London Day</Subheading>
					</Form.Group>

					{isBackendOnline ? (
						<React.Fragment>
							<Form.Group>
								<Caption
									as="label"
									htmlFor="name"
									name="firstname"
								>
									Your name <Form.Required />
								</Caption>
								<Form.Input
									required
									placeholder="e.g. John Doe"
									name="name"
									type="text"
									value={client.firstname}
									onChange={handleClientChange}
								/>
							</Form.Group>
							<Form.Group>
								<Caption as="label" htmlFor="email">
									Your Email <Form.Required />
								</Caption>
								<Form.Input
									required
									name="email"
									type="email"
									placeholder="e.g. johndoe@example.com"
									value={client.email}
									onChange={handleClientChange}
								/>
							</Form.Group>
							<Form.Group>
								<Caption as="label" htmlFor="email">
									Your Phone Number
								</Caption>
								<Form.Input
									name="tel"
									type="tel"
									placeholder="e.g. +44 1234 567 890"
									value={client.tel}
									onChange={handleClientChange}
								/>
							</Form.Group>
							<Form.Group>
								<Caption as="label" htmlFor="date">
									Requested Date <Form.Required />
								</Caption>
								<DatePicker
									selected={requestedDate}
									onChange={setRequestedDate}
									dateFormat="dd/MM/yyyy"
									minDate={new Date().setDate(
										new Date().getDate() + 1
									)}
									customInput={
										<Form.Input
											required
											value={requestedDate}
										/>
									}
									filterDate={(date) => {
										// Sunday is a no-go.
										return new Date(date).getDay() !== 0;
									}}
								/>
							</Form.Group>
							<Form.Group>
								<Caption as="label" htmlFor="groupSize">
									Number of Guests (can be approximate){" "}
									<Form.Required />
								</Caption>
								<Form.Input
									min="1"
									required
									name="groupSize"
									type="number"
									value={client.groupSize}
									onChange={handleClientChange}
								/>
							</Form.Group>
							<Form.Group>
								<Caption as="label" htmlFor="comments">
									Comments or Questions
								</Caption>
								<Form.Input
									as="textarea"
									name="comments"
									style={{
										height: "auto",
										resize: "vertical",
										minHeight: "120px",
										maxHeight: "300px",
									}}
									value={client.comments}
									onChange={handleClientChange}
								/>
							</Form.Group>
							{/* Still needs: Ts and Cs */}

							<Form.Group>
								<ReCAPTCHA
									sitekey="6LerWZkUAAAAABke7MMkRINL7lpgTXTjyD10zWtW"
									grecaptcha={window.grecaptcha}
								/>
							</Form.Group>

							<Form.Group>
								<Button type="submit">Request a booking</Button>
							</Form.Group>
							<Form.Group>
								<Paragraph small>
									By requesting a booking, you agree to our{" "}
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
								<Link to="/contact">contact form</Link> to
								request one manually.
							</Paragraph>
						</Form.Group>
					)}
					<Image />
				</Grid>
			</Section>
		</React.Fragment>
	);
};
