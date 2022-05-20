import Grid from "./Grid";
import React from "react";
import Section from "./Section";
import media from "../media";
import styled from "styled-components";

// rgba(26, 26, 26, 0.25)

const Template = styled.div`
	height: 2px;
	border: none;

	background: linear-gradient(
		0.25turn,
		transparent,
		rgba(26, 26, 26, 0.25),
		transparent
	);

	grid-column: 1 / -1;

	${media.minWidth("l")`
        grid-column: 2 / -2;
    `}
`;

const NegativePadding = styled.div`
	margin-top: -25px;

	${media.minWidth("l")`margin-top: -50px;`}
`;

export default () => (
	<React.Fragment>
		<NegativePadding />
		<Section>
			<Grid>
				<Template />
			</Grid>
		</Section>
	</React.Fragment>
);
