import styled from "styled-components";
import theme from "../../../theme";

export const Wrapper = styled.div`
	background-color: ${theme.color.red};
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	p,
	a {
		color: white;
	}
`;
