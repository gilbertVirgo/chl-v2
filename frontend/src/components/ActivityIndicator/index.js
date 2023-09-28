import { Heading, Paragraph } from "../Text";

import LoadingWheel from "../LoadingWheel";
import React from "react";
import { Wrapper } from "./styles";

export default ({ children, inverted, ...props }) => {
	return (
		<Wrapper {...props}>
			<LoadingWheel size="md" />
			<Paragraph style={{ marginTop: "15px" }}>
				<strong>{children}</strong>
			</Paragraph>
		</Wrapper>
	);
};
