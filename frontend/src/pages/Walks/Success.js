import { Heading, Paragraph, Subheading } from "../../components/Text";

import Button from "../../components/Button";
import { Link } from "react-router-dom";
import React from "react";
import Section from "../../components/Section";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory(),
		redirect = () => history.push("/");
	const [countdown, setCountdown] = React.useState(8);

	React.useEffect(() => {
		const tick = setInterval(
			() => setCountdown((countdown) => countdown - 1),
			1000
		);

		return () => clearInterval(tick);
	}, []);

	React.useEffect(() => {
		if (countdown === 0) redirect();
	}, [countdown]);

	return (
		<React.Fragment>
			<Section explode>
				<Heading>Success</Heading>
				<Subheading>Thank you for booking a tour with us.</Subheading>
				<br />
				<Paragraph>
					You will recieve a confirmation email shortly.
				</Paragraph>
			</Section>
			<Section>
				<Button onClick={redirect} icon="chevron left">
					Go back
				</Button>
				<br />
				<Paragraph>
					Go back to the homepage, or wait {countdown} second
					{countdown > 1 ? "s" : ""}.
				</Paragraph>
			</Section>
		</React.Fragment>
	);
};
