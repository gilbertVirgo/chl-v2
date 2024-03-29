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
		"header"
		"media"
		"body"
		"author";

	row-gap: 15px;

	margin-bottom: 30px;

	${Caption} {
		${media.minWidth("l")`
        
        margin: -17px 0 15px;
        `}
	}

	${media.minWidth("l")`
		margin-bottom: 75px;

        grid-template-rows: auto auto auto auto auto;

        ${({ invert, hasAuthor }) =>
			!invert
				? `grid-template-columns: 1fr 4fr 1fr 6fr;
        grid-template-areas: 
            ". header . media"
            ". title . media"${
				!!hasAuthor
					? `
			". author . media"`
					: ""
			}
            ". body . media"
            ". . . media";`
				: `grid-template-columns: 6fr 1fr 4fr 1fr;
        grid-template-areas: 
            "media . header ."
            "media . title ."${
				!!hasAuthor
					? `
			"media . author ."`
					: ""
			}
            "media . body ."
            "media . . .";  `}
    `}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const Header = styled(Caption)`
	grid-area: header;

	color: inherit;

	margin: 0 !important;
`;

export const Title = styled(Heading)`
	grid-area: title;

	${media.maxWidth("l")`
		margin: 0;
	`}
`;
export const Author = styled(Caption)`
	grid-area: author;
`;

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 15px;

	grid-area: body;
`;
