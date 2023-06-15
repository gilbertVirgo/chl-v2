import DefaultGrid from "../../components/Grid";
import { Paragraph } from "../../components/Text";
import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const Grid = styled(DefaultGrid)`
	row-gap: 30px;

	${media.minWidth("l")`
        grid-template-areas: 
            ". in in in in . im im im im im ."
            ". uk uk uk uk . os os os os .  .";
        row-gap: 45px;
    `}
`;

export const Wrapper = styled.div`
	grid-column: 1 / -1;

	${({ image }) =>
		image &&
		`
        background-size: cover;
        background-image: url("${image}");
    `}

	${Paragraph} + ${Paragraph} {
		margin-top: ${theme.gutter}px;
	}

	${media.minWidth("l")`
        box-sizing: border-box;

		${({ area }) => {
			switch (area) {
				case "intro":
					return `grid-area: in;`;
				case "image":
					return `grid-area: im;`;
				case "uk":
					return `grid-area: uk;`;
				case "overseas":
					return `grid-area: os;`;
			}
		}}
    `}
`;
