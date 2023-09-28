import { Caption } from "../../../../Text";
import styled from "styled-components";
import theme from "../../../../../theme";

const Wrapper = styled(Caption)`
	background-color: ${theme.color.light};
	line-height: 100%;
	text-align: center;
	height: 20px;
`;

export default ["M", "T", "W", "T", "F", "S", "S"].map((v, i) => (
	<Wrapper>{v}</Wrapper>
));
