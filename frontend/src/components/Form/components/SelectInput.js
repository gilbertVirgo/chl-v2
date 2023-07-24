import { Icon } from "../../Button/styles";
import generalStyles from "./generalStyles";
import styled from "styled-components";
import theme from "../../../theme";

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

export default ({ children, ...props }) => {
	return (
		<SelectWrapper>
			<SelectTemplate {...props}>{children}</SelectTemplate>
			<Icon type="chevron" />
		</SelectWrapper>
	);
};
