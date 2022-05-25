import media from "../../media";
import styled from "styled-components";

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

	background-color: #b02834;
	color: white;

	${({ small }) =>
		small &&
		`
		font-size: 12px;
		padding: 8px 12px;
	`}

	${({ theme }) =>
		({
			grey: `
				background-color: #E1E1E1; 
				color: #1A1A1A;

				.external-icon, .chevron-icon {
					background-color: #1a1a1a;
					width: 8px;
					height: 8px;
				}
			`,
		}[theme])}

	${media.minWidth("m")`
		width: auto;
	`}

	${media.minWidth("l")`
		${({ suspend }) => suspend && `margin-top: 40px`}
	`}
`;

export const Icon = {
	Chevron: styled.div.attrs({ className: "chevron-icon" })`
		display: inline-block;
		background-color: white;
		mask-image: url("${require("../../assets/icons/chevron-down.svg")
			.default}");
		-webkit-mask-image: url("${require("../../assets/icons/chevron-down.svg")
			.default}");
		mask-size: cover;
		width: 11px;
		height: 8px;
		margin-left: 8px;
	`,
	External: styled.div.attrs({ className: "external-icon" })`
		display: inline-block;
		background-color: white;
		mask-image: url("${require("../../assets/icons/external.svg")
			.default}");
		-webkit-mask-image: url("${require("../../assets/icons/external.svg")
			.default}");
		mask-size: cover;
		width: 11px;
		height: 11px;
		margin-right: 8px;
	`,
};

export const DropdownLeaf = styled.ul`
	background-color: white;
	list-style-type: none;
	padding: 8px 15px;
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
		padding: 10px 0 12px;

		a {
			color: inherit;
			text-decoration: none;
		}
	}
`;
