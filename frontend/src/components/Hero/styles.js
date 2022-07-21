import { Heading } from "../Text";
import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const Background = styled.div`
	background-color: ${theme.color.dark};
	height: 100%;

	padding: 50px 0;
	${media.minWidth("l")`padding: 100px 0;`}
`;

export const VideoPlaceholder = styled.div`
	position: relative;

	padding-bottom: calc(9 / 16 * 100%);

	grid-column: 1 / -1;
	grid-row: 2;

	${media.minWidth("l")`
		grid-column: 2 / -2;
		grid-row: 1;
	`}

	background-image: url("${require("../../assets/video-placeholder.svg")
		.default}");
	background-size: cover;
`;

export const Caption = styled.div`
	position: relative;
	z-index: 1;

	grid-column: 1 / -1;
	grid-row: 1;
	color: white;

	${Heading} {
		margin-bottom: 8px !important;
	}

	${media.minWidth("l")`display: none;`}
`;
