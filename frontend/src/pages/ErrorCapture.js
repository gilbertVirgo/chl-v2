import { Heading, Paragraph, Subheading } from "../components/Text";

import Button from "../components/Button";
import ErrorContext from "../ErrorContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import Section from "../components/Section";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();
	const { error, setError } = React.useContext(ErrorContext);

	const handleGoBack = (e) => {
		e.preventDefault();

		setError(null);

		history.go(-1);
	};

	return (
		<React.Fragment>
			<Section explode>
				<Heading>Something went wrong</Heading>
				<Subheading>
					Server Error:{" "}
					<em>
						"
						{error &&
							(error.hasOwnProperty("message")
								? error.message
								: JSON.stringify(error))}
						"
					</em>
				</Subheading>
				<br />
				<Paragraph>
					If the problem persists, please take a minute to{" "}
					<Link to="/contact/report-problem">report it</Link>, and
					we'll get it fixed as soon as we can.
				</Paragraph>
			</Section>
			<Section>
				<Paragraph>
					<Button onClick={handleGoBack} icon="chevron left">
						{" "}
						Go back
					</Button>
				</Paragraph>
			</Section>
		</React.Fragment>
	);
};
