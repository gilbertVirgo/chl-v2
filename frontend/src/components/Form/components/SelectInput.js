import { Icon } from "../../Button/styles";
import { Paragraph } from "../../Text";
import React from "react";
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

const RecommendedBadge = styled(Paragraph)`
	position: absolute;
	right: ${15 + 11 + 5}px;
	top: 50%;
	transform: translateY(-50%);

	display: block;
	padding: 2px 8px;
	font-size: 12px;
	font-weight: bolder;
	border-radius: 20px;
	background-color: ${theme.color.red};
	color: white;

	&::before {
		content: "Recommended";
	}
`;

export default ({ children, recommendedIndex, onChange, ...props }) => {
	const [showRecommendedBadge, setShowRecommendedBadge] = React.useState(
		recommendedIndex === 0
	);

	const handleChange = (event) => {
		const { target } = event;
		setShowRecommendedBadge(target.selectedIndex === recommendedIndex);

		onChange(event);
	};

	return (
		<SelectWrapper>
			<SelectTemplate onChange={handleChange} {...props}>
				{children}
			</SelectTemplate>
			{showRecommendedBadge && <RecommendedBadge />}
			<Icon type="chevron" />
		</SelectWrapper>
	);
};
