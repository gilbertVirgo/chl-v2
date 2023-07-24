import styled, { css } from "styled-components";

import DateInput from "./components/DateInput";
import { Icon } from "../Button/styles";
import PhoneInput from "./components/PhoneInput";
import SelectInput from "./components/SelectInput";
import generalStyles from "./components/generalStyles";
import media from "../../media";
import theme from "../../theme";

export const Date = DateInput;
export const Select = SelectInput;
export const Phone = PhoneInput;

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

	.react-datepicker-wrapper input {
		width: 100%;
	}

	.react-datepicker__day--selected,
	.react-datepicker__day--keyboard-selected {
		background-color: ${theme.color.red};
	}
`;

export const Required = styled.span`
	&::after {
		content: "*";
		color: ${theme.color.red};
	}
`;

export const Input = styled.input`
	${generalStyles}
	height: 40px;
	padding: 10px 15px;
`;

export const Textarea = styled(Input).attrs({ as: "textarea" })`
	height: auto;
	resize: vertical;
	min-height: 120px;
	max-height: 300px;
`;
