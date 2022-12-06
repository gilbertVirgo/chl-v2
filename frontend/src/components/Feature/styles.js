import { Caption, Heading, Paragraph, Subheading } from "../Text";

import Grid from "../Grid";
import { Link } from "react-router-dom";
import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const FeatureGrid = styled(Grid)`
	grid-template-columns: 1fr;
	grid-template-areas:
		"title"
		"media"
		"body";

	margin-bottom: 30px;

	${Caption} {
		${media.minWidth("l")`
        
        margin: -17px 0 15px;
        `}
	}

	${media.minWidth("l")`
		margin-bottom: 75px;

        grid-template-rows: auto auto auto auto auto;

        ${({ invert }) =>
			!invert
				? `grid-template-columns: 1fr 4fr 1fr 6fr;
        grid-template-areas: 
            ". . . media"
            ". title . media"
            ". body . media"
            ". . . media";`
				: `grid-template-columns: 6fr 1fr 4fr 1fr;
        grid-template-areas: 
            "media . . ."
            "media . title ."
            "media . body ."
            "media . . .";  `}
    `}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const Title = styled(Heading)`
	grid-area: title;
`;
export const Author = styled(Caption)`
	grid-area: title;
`;

export const Body = styled.div`
	grid-area: body;

	> * {
		margin-bottom: 15px;
	}
`;
