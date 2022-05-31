import { Heading, Paragraph } from "../Text";

import { Oval } from "react-loader-spinner";
import React from "react";
import { Wrapper } from "./styles";

export default ({ children, inverted, ...props }) => {
	return (
		<Wrapper {...props}>
			<Oval
				secondaryColor="#e1e1e1"
				color="#b02834"
				width={40}
				height={40}
			/>
			<Paragraph style={{ marginTop: "15px" }}>
				<strong>{children}</strong>
			</Paragraph>
		</Wrapper>
	);
};
