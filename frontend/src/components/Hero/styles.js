import { Heading } from "../Text";
import media from "../../media";
import styled from "styled-components";

export const Background = styled.div`
	background-color: #1a1a1a;
	height: 100%;

	padding: 50px 0;
	${media.minWidth("l")`padding: 100px 0;`}
`;

export const VideoPlaceholder = styled.div`
	position: relative;

	padding-bottom: 60%;

	grid-column: 1 / -1;
	grid-row: 2;

	${media.minWidth("l")`
		grid-column: 2 / -2;
		grid-row: 1;
	`}

	border-radius: 3px;

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

	${media.minWidth("l")`
		grid-column: 3 / 7;
		grid-row: 1;

		margin: auto 0 70px;
	`}
`;
