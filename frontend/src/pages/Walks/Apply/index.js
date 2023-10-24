import "react-datepicker/dist/react-datepicker.css";

import * as Form from "../../../components/Form";

import {
	Caption,
	Heading,
	Paragraph,
	Subheading,
} from "../../../components/Text";

import Button from "../../../components/Button";
import ErrorContext from "../../../ErrorContext";
import Grid from "../../../components/Grid";
import { Image } from "./styles";
import { Link } from "react-router-dom";
import LoadingWheel from "../../../components/LoadingWheel";
import { ReCAPTCHA } from "react-google-recaptcha";
import React from "react";
import Section from "../../../components/Section";
import Tip from "../../../components/Tip";
import formStructure from "./formStructure";
import formStructureTest from "./formStructureTest";
import parseFieldsForPost from "./helpers/parseFieldsForPost";
import put from "../../../api/booking-system/put";
import { useHistory } from "react-router-dom";

const TESTING = false;
const isBackendOnline = true;

export default () => {
	const history = useHistory();

	const { setError } = React.useContext(ErrorContext);

	const form = React.useRef(null);

	const [fields, setFields] = React.useState(
		TESTING ? formStructureTest : formStructure
	);
	const [loading, setLoading] = React.useState(false);
	const [formValid, setFormValid] = React.useState(false);

	const [recaptcha, setRecaptcha] = React.useState(false);

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

		if (target.checkValidity() && recaptcha) {
			setLoading(true);

			put("/booking", parseFieldsForPost(fields, recaptcha))
				.then(history.push.bind(null, "/walks/success"))
				.catch(setError);
		}
	};

	React.useEffect(() => {
		if (form.current) {
			setFormValid(form.current.checkValidity() && recaptcha);
		}
	}, [fields, recaptcha]);

	return (
		<React.Fragment>
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
									onChange={setRecaptcha}
								/>
							</Form.Group>

							<Form.Group>
								<Button
									type="submit"
									disabled={loading || !formValid}
								>
									{loading ? (
										<LoadingWheel size="sm" color="white" />
									) : (
										"Apply"
									)}
								</Button>
								{!formValid && (
									<Paragraph small>
										<em>
											Please fill in all the required
											fields and confirm that you are not
											a robot
										</em>
									</Paragraph>
								)}
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
