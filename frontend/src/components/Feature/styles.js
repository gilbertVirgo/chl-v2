import { Heading, Paragraph, Subheading } from "../Text";

import Grid from "../Grid";
import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

export const FeatureGrid = styled(Grid)`
	grid-template-columns: 1fr;
	grid-template-areas:
		"title"
		"image"
		"body";

	${Subheading} {
		${breakpoint("lg")`
        
        margin: -17px 0 15px;
        `}
	}

	${breakpoint("lg")`
        grid-template-rows: auto auto auto auto auto;

        ${({ inverted }) =>
			!inverted
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
`;

export const Title = styled(Heading)`
	grid-area: title;
`;

export const Image = styled.div`
	grid-area: image;

	background-image: url("${({ src }) => src}");
	background-size: cover;
	border-radius: 3px;

	${breakpoint("xs", "lg")`
        width: calc(100% + 30px);
        margin-left: -15px;
		
		// 16:9
        padding-bottom: calc(100 / 16 / 9 * 100%);
    `}

	${breakpoint("lg")`
        height: 350px;
    `}
`;

export const Body = styled.div`
	grid-area: body;

	> * {
		margin-bottom: 15px;
	}
`;
