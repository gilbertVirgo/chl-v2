import { Paragraph, Subheading } from "../Text";

import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

export const Panel = styled.div`
	grid-column: span 3;
	margin-bottom: 15px;

	${breakpoint("lg")`
        grid-column: span 4; 
    `}
`;

export const Image = styled.div`
	padding-bottom: 60%;
	background-size: cover;
	background-position: center;
	background-image: url("${({ src }) => src}");
	margin-bottom: 12px;
`;

export const Title = styled(Paragraph)`
	font-size: 16px;
	line-height: 19px;

	${breakpoint("lg")`
        font-size: 20px;
        line-height: 24px;
    `}

	margin-bottom: 5px;
`;

export const Subtitle = styled(Subheading)`
	font-size: 12px;
	line-height: 14px;
`;
