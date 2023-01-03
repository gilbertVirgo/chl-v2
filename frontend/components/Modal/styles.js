import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const Wrapper = styled.div`
	height: 250px;
	grid-column: 1 / -1;
	background-color: white;
	box-shadow: 0 10px 20px ${theme.color.dark}20;

	transition-delay: 230ms;
	transition: all 230ms;
	transform: translateY(-60px);
	opacity: 0;

	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;

	${media.minWidth("m")`
        grid-column: 2 / -2;
    `}

	${media.minWidth("l")`
        grid-column: 4 / -4;
    `}
`;

export const Overlay = styled.div`
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	transition-delay: 0;
	transition: opacity 230ms;
	opacity: 0;
	pointer-events: none;
	background-color: ${theme.color.dark}20;

	&.show {
		pointer-events: all;
		transition-delay: 230ms;
		opacity: 1;

		${Wrapper} {
			transition-delay: 0;
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;
