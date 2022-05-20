import { Caption } from "./Text";
import media from "../media";
import styled from "styled-components";

const Form = {
	Group: styled.section`
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
	`,
	Input: styled.input`
		height: 40px;
		outline: none !important;

		display: block;
		box-sizing: border-box;
		border: 2px solid #e1e1e1; //#b02834;
		padding: 10px 15px;
		font-family: "myriad-pro";
		font-weight: 300;
		font-size: 16px;
		line-height: 130.3%;

		will-change: border-color;
		transition: border-color 0.23s;

		${media.maxWidth("l")`
			grid-column: 1 / -1;
		`}

		${media.minWidth("l")`
			grid-column: 1 / 5;
		`}

		&:focus {
			border-color: #b02834;
		}
	`,
};

// Form.Textarea = styled.textarea`
// 	min-height: 120px;
// 	max-height: 300px;
// 	resize: vertical;

// 	${standardFieldStyles}
// `;

export default Form;
