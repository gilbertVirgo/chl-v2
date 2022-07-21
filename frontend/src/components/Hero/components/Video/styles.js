import { Heading } from "../../../Text";
import media from "../../../../media";
import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	padding-bottom: calc(9 / 16 * 100%);
	grid-column: 1 / -1;
	grid-row: 2;

	${media.minWidth("l")`
        grid-column: 2 / -2;
        grid-row: 1;
    `}
`;

const cover = `
position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;`;

export const Frame = styled.iframe.attrs({
	frameborder: "0",
	allow: "autoplay,fullscreen",
	allowfullscreen: true,
})`
	${cover}

	z-index: 10;
	border: none;
`;

export const Thumbnail = styled.div`
	${cover}

	z-index: 11;
	background-image: url("${({ src }) => src}");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	backdrop-filter: brightness(60%);

	display: flex;
	align-items: center;
	justify-content: center;

	will-change: opacity;
	transition: 230ms opacity;

	${({ show }) => (show ? `opacity: 1` : `opacity: 0; pointer-events: none;`)}
`;

export const PlayButton = styled.div`
	background-color: white;
	mask-image: url("${require("../../../../assets/icons/play-thin.svg")
		.default}");
	mask-size: cover;
	width: 80px;
	height: 80px;

	transform-origin: center;
	transform: scale(0.95);
	will-change: transform;
	transition: 230ms transform;
	cursor: pointer;

	&:hover {
		transform: scale(1);
	}
`;

export const Caption = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50px;
	right: 50%;
	color: white;

	${Heading} {
		margin-bottom: 8px !important;
	}

	${media.maxWidth("l")`display: none;`}
`;
