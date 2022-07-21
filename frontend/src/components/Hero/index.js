import { Caption, VideoPlaceholder } from "./styles";
import { Heading, Paragraph } from "../Text";

import Grid from "../Grid";
import React from "react";
import Section from "../Section";

export default ({ variant, children }) => {
	return (
		<Grid style={{ marginBottom: 0 }}>
			<Caption>{children}</Caption>
			<VideoPlaceholder variant={variant} />
		</Grid>
	);
};
