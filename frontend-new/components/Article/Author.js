import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const Head = styled.div`
	display: flex;
	column-gap: 15px;
	flex-direction: row;
	align-items: center;

	margin: 5px 0 15px;

	${media.minWidth("l")`
		margin-bottom: 30px;
	`}

	img {
		object-fit: cover;
		width: 45px;
		height: 45px;
		display: block;
		border-radius: 60px;
	}

	p {
		margin: 0;
	}
`;

export const Foot = styled(Head)`
	padding: 15px;
	box-sizing: border-box;
	background-color: ${theme.color.light};
	align-items: flex-start;

	grid-column: 1 / -1;

	margin: 15px 0 0;

	${media.minWidth("l")`
        grid-column: 4 / -4;
    `}

	img {
		width: 60px;
		height: 60px;
	}
`;
