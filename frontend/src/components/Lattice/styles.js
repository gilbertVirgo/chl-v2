import { Caption, Paragraph } from "../Text";

import media from "../../media";
import styled from "styled-components";

export const Panel = styled.div`
	grid-column: span 3;
	margin-bottom: 15px;

	${media.minWidth("l")`
        grid-column: span 4; 
    `}
`;

export const Image = styled.div`
	background-size: cover;
	background-position: center;
	background-image: url("${({ src }) => src}");
	margin-bottom: 12px;
	padding-bottom: 60%;

	${media.minWidth("l")`
		${({ circle }) => circle && `width: 75%; padding-bottom: 75%;`}
	`}

	${({ circle }) =>
		circle &&
		`
	padding-bottom: 100%;
	border-radius: 100%;
	`}

${({ square }) =>
		square &&
		`
	padding-bottom: 100%;
	`}
`;

export const Title = styled(Paragraph)`
	font-size: 16px;
	line-height: 19px;

	${({ large }) =>
		large &&
		`
		font-size: 24px;
		line-height: 29px;
	`}

	${media.minWidth("l")`
        font-size: 20px;
        line-height: 24px;
    `}

	margin-bottom: 5px;
`;

export const Subtitle = styled(Caption)`
	font-size: 12px;
	line-height: 14px;
`;

export const Description = styled(Paragraph)`
	margin-top: 15px;
	font-size: 16px;
	line-height: 130.3%;
`;
