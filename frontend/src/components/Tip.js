import { Paragraph } from "./Text";
import styled from "styled-components";
import theme from "../theme";

const Wrapper = styled.div`
	background-color: ${theme.color.light};

	display: flex;
	justify-content: flex-start;
	align-items: top;
	padding: ${theme.gutter / 2}px;
	column-gap: ${theme.gutter / 2}px;
	grid-column: 1 / -1;
`;

export default ({ children, emoji = "💡" }) => {
	return (
		<Wrapper>
			<Paragraph>{emoji}</Paragraph>
			<Paragraph small>{children}</Paragraph>
		</Wrapper>
	);
};
