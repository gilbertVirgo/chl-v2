import { Background, Caption, VideoPlaceholder } from "./styles";
import { Heading, Paragraph } from "../Text";

import Grid from "../Grid";
import React from "react";
import Section from "../Section";

export default ({ children }) => {
	return (
		<Section>
			<Background>
				<Grid style={{ marginBottom: 0 }}>
					<Caption>{children}</Caption>
					<VideoPlaceholder />
				</Grid>
			</Background>
		</Section>
	);
};
