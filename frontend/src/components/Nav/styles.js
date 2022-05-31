import { Link as DefaultLink } from "react-router-dom";
import Grid from "../Grid";
import media from "../../media";
import styled from "styled-components";

export const navBarHeight = 90;
export const navBarZIndex = 1000;

export const Padding = styled.div`
	height: ${navBarHeight}px;
`;

export const Wrapper = styled.div`
	background-color: white;
	height: ${navBarHeight}px;
	box-shadow: 0 1px 5px #00000020;
	padding: 15px;
	box-sizing: border-box;
	position: fixed;
	width: 100%;
	z-index: ${navBarZIndex};

	${Grid} {
		${media.maxWidth("l")`
			max-width: 100%;
			margin: 0;
		`}
	}
`;

export const LinkGroup = {
	SmallScreen: styled.div`
		${media.minWidth("l")`
			display: none;
		`}

		padding: 0;
		grid-column: 2 / -2;

		> * {
			display: block;
		}
	`,
	LargeScreen: styled.div`
		${media.maxWidth("l")`
			display: none
		`}

		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: -7 / -1;
	`,
};

export const Logo = styled(DefaultLink)`
	display: block;
	background-image: url("${require("../../assets/logo.png")}");
	background-size: cover;
	width: 150px;
	height: 60px;
	grid-column: 1 / 4;
`;

export const Drawer = styled(Grid)`
	position: fixed;
	top: ${navBarHeight}px;
	left: 0;
	width: 100%;
	height: calc(100% - ${navBarHeight}px);
	background-color: #fff;
	z-index: 1001;
	will-change: opacity;
	transition: opacity 0.23s;

	align-items: center;

	${({ open }) =>
		open
			? `
		opacity: 1;
		pointer-events: all;
	`
			: `
		pointer-events: none; 
		opacity: 0;
	`}
`;

export const Link = styled(DefaultLink)`
	color: #1a1a1a;
	text-decoration: none;
	font-family: myriad-pro;
	font-style: normal;
	font-weight: 300;
	line-height: 106.3%;

	${media.maxWidth("l")`
		font-size: 24px;
		margin-bottom: 15px;

		${({ donate }) => donate && `margin-top: 45px;`}
	`}

	${media.minWidth("l")`
		font-size: 16px;
	`}
`;

export const Burger = styled.div`
	grid-column: -1;

	width: 24px;
	height: 13px;

	background-image: url("${require("../../assets/burger.svg")}");
	background-size: cover;

	align-self: center;
	justify-self: center;
`;
