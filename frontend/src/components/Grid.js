import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

export default styled.section`
	display: grid;
	width: 600px;
	max-width: calc(100% - 30px);
	margin: 0 auto;
	column-gap: 15px;
	row-gap: 15px;
	grid-template-columns: repeat(6, 1fr);
	align-items: center;

	${breakpoint("lg")`
		width: 1125px;
		grid-template-columns: repeat(12, 1fr);
	`}
`;
