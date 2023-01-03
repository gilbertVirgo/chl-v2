import media from "../media";
import styled from "styled-components";

export default styled.section`
	display: grid;

	column-gap: 15px;
	row-gap: 15px;
	grid-template-columns: repeat(6, 1fr);
	align-items: top;

	${media.maxWidth("l")`
		.panel:nth-child(3) {
			${({ singleRow }) => singleRow && `display: none;`}
		}
	`}

	${media.minWidth("l")`
		grid-template-columns: repeat(12, 1fr);
	`}
`;
