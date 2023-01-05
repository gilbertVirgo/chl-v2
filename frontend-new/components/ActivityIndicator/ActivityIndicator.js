import { Oval } from "react-loader-spinner";
import { Paragraph } from "../Text";
import React from "react";
import { Wrapper } from "./styles";

export const ActivityIndicator = ({ children, inverted, ...props }) => {
	const color = inverted ? "white" : "black";

	return (
		<Wrapper {...props}>
			<Oval color={color} width={40} height={40} />
			<Paragraph style={{ marginTop: "15px", color }}>
				{children}
			</Paragraph>
		</Wrapper>
	);
};
