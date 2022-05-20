import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import media from "../media";
import styled from "styled-components";

const ButtonTemplate = styled.button`
	appearance: none;
	border: none;
	border-radius: 3px;
	padding: 13px 20px;
	font-size: 16px;
	line-height: 16px;
	font-weight: 600;
	font-family: "myriad-pro";
	width: 100%;

	background-color: #b02834;
	color: white;

	${({ theme }) =>
		({
			grey: `background-color: #E1E1E1; color: #1A1A1A;`,
		}[theme])}

	${media.minWidth("m")`
		width: auto;
	`}

	${media.minWidth("l")`
		${({ suspend }) => suspend && `margin-top: 40px`}
	`}

	${({ center }) => center && `display: block;margin: 0 auto;`}
`;

const Chevron = styled.div`
	display: inline-block;
	background-image: url("${require("../assets/icons/chevron-down.svg")
		.default}");
	background-size: cover;
	width: 11px;
	height: 8px;
	margin-left: 5px;
`;

export default ({ dropdown, children, ...props }) => {
	return (
		<ButtonTemplate {...props}>
			{children} {dropdown && <Chevron />}
		</ButtonTemplate>
	);
};
