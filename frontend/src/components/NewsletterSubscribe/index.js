import * as Form from "../Form";

import { Caption, Paragraph } from "../Text";

import Button from "../Button";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";
import { Wrapper } from "./styles";
import parseMailchimpSubscribeStatus from "../../parseMailchimpSubscribeStatus";
import theme from "../../theme";

const url =
	"//christianheritagelondon.us9.list-manage.com/subscribe/post?u=f18c1c82b624be730c499657e&amp;id=a75d3fa84b&amp;f_id=00f607e1f0";
//"//christianheritagelondon.us9.list-manage.com/subscribe?u=f18c1c82b624be730c499657e&id=a75d3fa84b";

export default () => {
	const [email, setEmail] = React.useState("");

	return (
		<MailchimpSubscribe
			url={url}
			render={({ subscribe, status, message }) => (
				<Form.Group style={{ gridColumn: "1 / -1", marginBottom: "0" }}>
					<Caption
						style={{ color: "white" }}
						as="label"
						htmlFor="newsletter-subscribe-email"
					>
						Recieve our newsletter
					</Caption>
					<Wrapper>
						<Form.Input
							name="newsletter-subscribe-email"
							placeholder="example@example.com"
							theme="white"
							type="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Button
							style={{ minWidth: "100px" }}
							theme="white"
							onClick={() => subscribe({ EMAIL: email })}
						>
							Sign up
						</Button>
					</Wrapper>

					{parseMailchimpSubscribeStatus(status, message)}
				</Form.Group>
			)}
		/>
	);
};
