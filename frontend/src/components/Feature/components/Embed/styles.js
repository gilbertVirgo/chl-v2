import styled from "styled-components";

export const Wrapper = styled.div`
	grid-area: media;
	padding-bottom: calc(9 / 16 * 100%);
	position: relative;
`;

export const Frame = styled.iframe.attrs({
	frameborder: "0",
	allow: "autoplay,fullscreen",
	allowfullscreen: true,
})`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: none;
`;
