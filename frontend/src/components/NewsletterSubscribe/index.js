import * as Form from "../Form";

import { Caption, Paragraph } from "../Text";

import Button from "../Button";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";
import { Wrapper } from "./styles";
import theme from "../../theme";

const defaultURL =
	"//christianheritagelondon.us9.list-manage.com/subscribe/post?u=f18c1c82b624be730c499657e&amp;id=a75d3fa84b&amp;f_id=00f607e1f0";

export default ({ dark, customURL }) => {
	const [email, setEmail] = React.useState("");

	let url = customURL || defaultURL;

	const parseStatus = (status, message) => {
		switch (status) {
			case "sending":
				return <Paragraph small>Sending request...</Paragraph>;
			case "error":
				return (
					<Paragraph style={{ color: theme.color.red }}>
						There was an error: {message}
					</Paragraph>
				);
			case "success":
				return <Paragraph small>{message}</Paragraph>;
		}
	};

	return (
		<MailchimpSubscribe
			url={url}
			render={({ subscribe, status, message }) => (
				<Form.Group style={{ gridColumn: "1 / -1", marginBottom: "0" }}>
					<Caption
						style={{ color: dark ? theme.color.dark : "white" }}
						as="label"
						htmlFor="newsletter-subscribe-email"
					>
						Subscribe
					</Caption>
					<Wrapper>
						<Form.Input
							name="newsletter-subscribe-email"
							placeholder="example@example.com"
							theme={dark ? "" : "white"}
							type="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Button
							style={{ minWidth: "100px" }}
							theme={dark ? "" : "white"}
							onClick={() => subscribe({ EMAIL: email })}
						>
							Sign up
						</Button>
					</Wrapper>

					{parseStatus(status, message)}
				</Form.Group>
			)}
		/>
	);
};
