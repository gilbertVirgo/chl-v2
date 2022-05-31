import { navBarHeight, navBarZIndex } from "../Nav/styles";

import media from "../../media";
import styled from "styled-components";

export const Background = styled.div`
	position: fixed;
	left: 0;
	top: ${navBarHeight}px;
	width: 100vw;
	height: calc(100vh - ${navBarHeight}px);
	z-index: ${navBarZIndex - 1};
	background-color: #1a1a1add;

	transition: opacity 0.23s;

	${({ active }) =>
		active
			? `
		pointer-events: all;
		opacity: 1;
	`
			: `pointer-events: none; opacity: 0;`}
`;

export const CloseButton = styled.button`
	appearance: none;
	border: none;
	background-color: #e5e5e5;
	mask-image: url("${require("../../assets/icons/close.svg").default}");
	mask-size: cover;
	mask-position: center;

	position: absolute;
	top: 20px;
	right: 20px;
	width: 20px;
	height: 20px;

	cursor: pointer;

	transition: transform 0.23s;
	transform-origin: center center;

	&:hover {
		transform: scale(1.1, 1.1);
	}
`;

export const FrameWrapper = styled.div`
	grid-column: 1 / -1;
	padding-bottom: calc(9 / 16 * 100%);
	position: relative;

	${media.minWidth("l")`
		grid-column: 3 / -3;
	`}
`;

export const Frame = styled.iframe`
	position: absolute;
	left: 0;
	top: 0;
`;
