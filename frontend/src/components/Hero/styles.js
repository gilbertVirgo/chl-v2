import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

export const Background = styled.div`
	background-color: #1a1a1a;
	height: 100%;

	padding: 50px 0;
	${breakpoint("lg")`padding: 100px 0;`}
`;

export const VideoPlaceholder = styled.div`
	position: relative;

	padding-bottom: 60%;

	grid-column: 1 / -1;
	grid-row: 2;

	${breakpoint("lg")`
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

	${breakpoint("lg")`
		grid-column: 3 / 7;
		grid-row: 1;

		margin: auto 0 70px;
	`}
`;
