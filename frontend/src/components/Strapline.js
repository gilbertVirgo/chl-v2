import Grid from "./Grid";
import React from "react";
import Section from "./Section";
import media from "../media";
import styled from "styled-components";

const Text = styled.h3`
	font-family: "myriad-pro";
	font-style: normal;
	font-weight: 300;
	line-height: 130.3%;
	text-align: center;
	font-size: 24px;
	margin-top: 0 !important;

	grid-column: 1 / -1;

	${media.minWidth("l")`
        font-size: 28px;
        grid-column: 4 / -4;
        width: 120%;
        margin-left: -10%;    
    `}
`;

export default ({ children }) => (
	<Grid>
		<Text>{children}</Text>
	</Grid>
);
