import styled, { css } from "styled-components";

import { Icon } from "../Button/styles";
import media from "../../media";
import theme from "../../theme";

export const Group = styled.section`
	position: relative;

	grid-column: 1 / -1;

	${media.minWidth("l")`
			grid-column: 2 / 6;
			margin-bottom: 15px;
		`}

	display: grid;
	row-gap: 6px;

	&:last-child {
		margin-bottom: 0;
	}
`;

const generalStyles = css`
	outline: none !important;

	display: block;
	box-sizing: border-box;
	border: 2px solid #e1e1e1;
	font-family: "myriad-pro";
	font-weight: 300;
	font-size: 16px;
	line-height: 130.3%;
	background: transparent;

	will-change: border-color;
	transition: border-color 0.23s;

	${media.maxWidth("l")`
		grid-column: 1 / -1;
	`}

	${media.minWidth("l")`
		grid-column: 1 / 5;
	`}

	&:focus {
		border-color: ${theme.color.red};
	}

	${({ theme }) =>
		({
			white: `
				border-color: white;
				color: white;
			`,
		}[theme])}
`;

const SelectWrapper = styled.div`
	position: relative;
	height: 40px;

	.icon {
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		background-color: ${theme.color.red};
	}
`;

const SelectTemplate = styled.select`
	${generalStyles}
	width: 100%;
	height: 100%;
	padding: 0 15px;
	appearance: none;
`;

export const Select = ({ children, ...props }) => {
	return (
		<SelectWrapper>
			<SelectTemplate {...props}>{children}</SelectTemplate>
			<Icon type="chevron" />
		</SelectWrapper>
	);
};

export const Input = styled.input`
	${generalStyles}
	height: 40px;
	padding: 10px 15px;
`;
