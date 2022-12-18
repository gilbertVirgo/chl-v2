import { Heading, Paragraph, Subheading } from "../Text";

import Button from "../Button";
import DefaultAudioPlayer from "../AudioPlayer";
import DefaultGrid from "../Grid";
import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const TextGrid = styled(DefaultGrid)`
	margin-top: 50px;
	row-gap: 0;

	${media.minWidth("l")`
        margin-top: 75px;
    `}

	p, blockquote {
		// Default Paragraph styles
		font-family: "myriad-pro";
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 150%;
		margin: 0 0 15px;
	}

	h1,
	${Subheading}, blockquote,
	p,
	div {
		grid-column: 1 / -1;
		margin-left: unset;
		margin-right: unset;

		${media.minWidth("l")`
            grid-column: 4 / -4;
        `}
	}
`;

export const AudioPlayer = styled(DefaultAudioPlayer)`
	margin-bottom: 50px;

	${media.minWidth("l")`
		margin-bottom: 75px;
	`}
`;

export const Image = styled.div`
	grid-column: 1 / -1;
	position: relative;
	margin-bottom: 25px;

	${media.minWidth("l")`
        grid-column: 3 / -3;
    `}

	padding-bottom: calc(9 / 16 * 100%);
	background-color: #fff;

	background-image: url("${({ src }) => src}");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const BlockQuote = styled.blockquote`
	margin: 0;
	padding: 0 15px;
	border-left: 2px solid ${theme.color.light};
`;
