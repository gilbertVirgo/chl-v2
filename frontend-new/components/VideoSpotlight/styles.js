import { navBarHeight, navBarZIndex } from "../Nav/styles";
import styled, { keyframes } from "styled-components";

import media from "../../media";
import theme from "../../theme";

export const Background = styled.div`
	position: fixed;
	left: 0;
	top: ${navBarHeight}px;
	width: 100vw;
	height: calc(100vh - ${navBarHeight}px);
	z-index: ${navBarZIndex - 1};
	background-color: ${theme.color.dark}dd;

	transition: opacity 0.23s;

	${({ active }) =>
		active
			? `
		pointer-events: all;
		opacity: 1;

		.frame-wrapper {
			opacity: 1;
			transform: translateY(0px);
		}
	`
			: `
		opacity: 0;
		pointer-events: none; 
		
		.frame-wrapper {
			opacity: 0;
			transition-delay: 0.5s;
			transform: translateY(-100px);
		}
	`}
`;

export const CloseButton = styled.button`
	appearance: none;
	border: none;
	background-color: #e5e5e5;
	mask-image: url("/assets/icons/close.svg");
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

export const FrameWrapper = styled.div.attrs({ className: "frame-wrapper" })`
	grid-column: 1 / -1;
	padding-bottom: calc(9 / 16 * 100%);
	position: relative;
	background-color: ${theme.color.dark};

	will-change: transform;
	transition: 0.23s transform;

	${media.minWidth("l")`
		grid-column: 2 / -2;
	`}
`;

export const Frame = styled.iframe`
	position: absolute;
	left: 0;
	top: 0;
`;
