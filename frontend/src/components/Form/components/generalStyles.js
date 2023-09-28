import { css } from "styled-components";
import media from "../../../media";
import theme from "../../../theme";

export default css`
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
