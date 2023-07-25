import media from "../../../../../media";
import styled from "styled-components";
import theme from "../../../../../theme";

const Wrapper = styled.div`
	position: absolute;
	background-color: white;
	border-radius: 6px;
	box-shadow: ${theme.boxShadow};
	padding: 6px;
	left: calc(100% + 6px);
	top: 0;
	transform: translateX(-25px);
	opacity: 0;
	will-change: opacity, transform;
	transition: all 0.23s;
	pointer-events: none;
	z-index: -1;

	${media.maxWidth("s")`display: none;`}
`;

const Tooltip = (p) => {
	return (
		<Wrapper {...p}>
			<img
				style={{ display: "block" }}
				src={require("../../../../../assets/calendar-tooltip.gif")}
				width={150}
			/>
		</Wrapper>
	);
};

Tooltip.Trigger = styled.div`
	position: relative;

	${media.minWidth("s")`
		width: fit-content;
		&:hover ${Wrapper} {
			transform: translateX(0px);
			opacity: 1;
		}
	`}
`;

export default Tooltip;
