import { Link as DefaultLink } from "react-router-dom";
import Grid from "../Grid";
import Headroom from "react-headroom";
import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

const navBarHeight = 90;

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
	z-index: 1000;

	${Grid} {
		${breakpoint("xs", "lg")`
			max-width: 100%;
			margin: 0;
		`}
	}
`;

export const Logo = styled.div`
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

export const LinkList = styled.div`
	padding: 0;
	list-style-type: none;
	grid-column: 2 / -2;

	${breakpoint("xs", "lg")`
		> * {
			display: block;
			
		}
	`}

	${breakpoint("lg")`
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-column: -7 / -1;
    `}
`;

export const Link = styled(DefaultLink)`
	color: #1a1a1a;
	text-decoration: none;
	font-family: myriad-pro;
	font-style: normal;
	font-weight: 300;
	line-height: 106.3%;

	${breakpoint("xs", "lg")`
		font-size: 24px;
		margin-bottom: 15px;
	`}

	${breakpoint("lg")`
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
