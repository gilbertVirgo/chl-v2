import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import breakpoint from "styled-components-breakpoint";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ButtonTemplate = styled.button`
	appearance: none;
	border: none;
	border-radius: 3px;
	background-color: #b02834;
	padding: 13px 20px;
	font-size: 16px;
	line-height: 16px;
	font-weight: 600;
	font-family: "myriad-pro";
	color: white;

	${breakpoint("lg")`
		${({ suspend }) => suspend && `margin-top: 40px`}
	`}
`;

export default ({ dropdown, children, ...props }) => {
	return (
		<ButtonTemplate {...props}>
			{children} {dropdown && <FontAwesomeIcon icon={faCaretDown} />}
		</ButtonTemplate>
	);
};
