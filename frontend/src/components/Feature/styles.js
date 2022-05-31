import { Caption, Heading, Paragraph } from "../Text";

import Grid from "../Grid";
import media from "../../media";
import styled from "styled-components";

export const FeatureGrid = styled(Grid)`
	grid-template-columns: 1fr;
	grid-template-areas:
		"title"
		"image"
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
            ". . . image"
            ". title . image"
            ". body . image"
            ". . . image";`
				: `grid-template-columns: 6fr 1fr 4fr 1fr;
        grid-template-areas: 
            "image . . ."
            "image . title ."
            "image . body ."
            "image . . .";  `}
    `}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const Title = styled(Heading)`
	grid-area: title;
`;

export const Image = styled.div`
	grid-area: image;

	background-image: url("${({ src }) => src}");
	background-size: cover;
	background-position: center;
	/* border-radius: 3px; */

	// Eyeballed this
	padding-bottom: calc(9 / 16 * 100%);

	${media.maxWidth("l")`
        width: calc(100% + 30px);
        margin-left: -15px;
    `}
`;

export const Body = styled.div`
	grid-area: body;

	> * {
		margin-bottom: 15px;
	}
`;
