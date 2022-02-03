import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

export const ShowOnLargeScreens = styled.div`
	${breakpoint("xs", "lg")`
        display: none;
    `}
`;

export const ShowOnSmallScreens = styled.div`
	${breakpoint("lg")`
        display: none;
    `}
`;
