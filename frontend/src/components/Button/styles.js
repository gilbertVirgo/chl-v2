import icons from "./icons";
import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const ButtonWrapper = styled.div`
	position: relative;
	${({ center }) =>
		center &&
		`
		margin: 0 auto;
		display: block;
		width: max-content;
	`}
`;

export const ButtonTemplate = styled.button`
	position: relative;
	cursor: pointer;
	appearance: none;
	border: none;
	padding: 13px 20px;
	font-size: 16px;
	line-height: 16px;
	font-weight: 600;
	font-family: "myriad-pro";
	width: 100%;
	display: flex;
	column-gap: 8px;
	align-items: center;
	justify-content: center;

	background-color: ${theme.color.red};
	color: white;

	${({ small }) =>
		small &&
		`
		font-size: 12px;
		padding: 8px 12px;

		.icon {
			width: 8px !important;
			height: 8px !important;
		}
	`}

	${({ theme }) =>
		({
			grey: `
				background-color: #E1E1E1; 
				color: #1A1A1A;

				.icon {
					background-color: #1a1a1a;
				}
			`,
			white: `
				background-color: white; 
				color: #1A1A1A;

				.icon {
					background-color: #1a1a1a;
				}
			`,
		}[theme])}

	${media.minWidth("s")`
		width: auto;
	`}

	${media.minWidth("l")`
		${({ suspend }) => suspend && `margin-top: 40px`}
	`}
`;

export const Icon = styled.div.attrs({ className: "icon" })`
	display: inline-block;
	background-color: white;

	${({ type }) =>
		type &&
		`
		mask-image: url("${icons[type].url}");
		width: ${icons[type].width * 0.11}px;
		height: ${icons[type].height * 0.11}px;
	`}

	/* something's gone wrong here. Basically I hate the hover play button thing on podcast videos so I think I'll put a video button (with video icon) beneath/beside each one instead to open up the player */

	/* -webkit-mask-image: url("${require("../../assets/icons/chevron-down.svg")
		.default}"); */
	mask-size: cover;
	mask-position: center;
`;

export const DropdownLeaf = styled.ul`
	background-color: white;
	list-style-type: none;
	padding: 0 15px;
	row-gap: 15px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	width: 170px;
	margin: 0;
	position: absolute;

	transition: opacity 0.23s;
	will-change: opacity;

	${({ active }) =>
		active
			? `pointer-events: all; opacity: 1;`
			: `pointer-events: none; opacity: 0;`}

	li {
		&:not(:last-child) {
			border-bottom: 2px solid rgba(0, 0, 0, 0.1);
		}
		display: block;
		margin: 0 !important;
		padding: 10px 0 12px;

		a {
			color: inherit;
			text-decoration: none;
		}
	}
`;
