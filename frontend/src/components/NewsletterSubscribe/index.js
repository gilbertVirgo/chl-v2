import * as Form from "../Form";

import Button from "../Button";
import { Caption } from "../Text";
import React from "react";
import { Wrapper } from "./styles";

export default () => {
	return (
		<Form.Group style={{ gridColumn: "1 / -1", marginBottom: "0" }}>
			<Caption
				style={{ color: "white" }}
				as="label"
				for="newsletter-subscribe-email"
			>
				Join our newsletter
			</Caption>
			<Wrapper>
				<Form.Input
					name="newsletter-subscribe-email"
					placeholder="example@example.com"
					theme="white"
				/>
				<Button theme="white">Sign up</Button>
			</Wrapper>
		</Form.Group>
	);
};
