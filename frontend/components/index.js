import media from "../media";
import styled from "styled-components";

export const ShowOnLargeScreens = styled.div`
	${media.maxWidth("l")`
        display: none;
    `}
`;

export const ShowOnSmallScreens = styled.div`
	${media.minWidth("l")`
        display: none;
    `}
`;
