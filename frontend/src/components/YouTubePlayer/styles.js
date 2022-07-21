import React from "react";
import media from "../../media";
import styled from "styled-components";

export const FrameWrapper = styled.div`
	grid-column: 1 / -1;
	position: relative;
	margin-bottom: 25px;

	${media.minWidth("l")`
        grid-column: 3 / -3;
    `}

	padding-bottom: calc(9 / 16 * 100%);
	background-color: #fff;
`;

export const Frame = styled.iframe`
	position: absolute;
	left: 0;
	top: 0;

	z-index: 0;
`;
