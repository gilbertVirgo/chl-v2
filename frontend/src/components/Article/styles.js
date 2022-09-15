import { Heading, Paragraph } from "../Text";

import Button from "../Button";
import DefaultAudioPlayer from "../AudioPlayer";
import DefaultGrid from "../Grid";
import media from "../../media";
import styled from "styled-components";

export const TextGrid = styled(DefaultGrid)`
	margin-top: 50px;

	${media.minWidth("l")`
        margin-top: 75px;
    `}

	p {
		// Default Paragraph styles
		font-family: "myriad-pro";
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 130.3%;
		margin: 0 0 15px;
	}

	h1,
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
