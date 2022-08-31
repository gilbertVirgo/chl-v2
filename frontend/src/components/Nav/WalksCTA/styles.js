import styled from "styled-components";
import theme from "../../../theme";

export const Wrapper = styled.div`
	background-color: ${theme.color.red};
	min-height: 40px;
	padding: 15px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;

	p,
	a {
		color: white;
	}
`;
