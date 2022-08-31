import media from "../../media";
import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`;

export const Wrapper = styled.div`
	height: 250px;
	grid-column: 1 / -1;
	background-color: white;

	${media.minWidth("m")`
        grid-column: 2 / -2;
    `}

	${media.minWidth("l")`
        grid-column: 4 / -4;
    `}
`;
