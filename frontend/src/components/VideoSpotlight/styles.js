import { navBarHeight, navBarZIndex } from "../Nav/styles";
import styled, { keyframes } from "styled-components";

import media from "../../media";

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const Background = styled.div`
	animation: ${fadeIn} 0.23s forwards;

	position: fixed;
	left: 0;
	top: ${navBarHeight}px;
	width: 100vw;
	height: calc(100vh - ${navBarHeight}px);
	z-index: ${navBarZIndex - 1};
	background-color: #1a1a1add;

	// Solve this issue. Needs to fade out, not blink out.
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
		grid-column: 2 / -2;
	`}
`;

export const Frame = styled.iframe`
	position: absolute;
	left: 0;
	top: 0;
`;
