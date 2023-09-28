import media from "../../../../../media";
import styled from "styled-components";

export default styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);

	${media.minWidth("s")`
    width: fit-content;
	height: fit-content;
    `}

	border: 2px solid #e1e1e1;

	user-select: none;
`;
