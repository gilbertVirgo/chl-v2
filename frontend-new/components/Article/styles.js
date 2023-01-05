import { Heading, Paragraph, Subheading } from "../Text";

import Button from "../Button";
import DefaultAudioPlayer from "../AudioPlayer";
import DefaultGrid from "../Grid";
import media from "../../media";
import styled from "styled-components";
import theme from "../../theme";

export const AudioPlayer = styled(DefaultAudioPlayer)`
	margin-bottom: 50px;

	${media.minWidth("l")`
		margin-bottom: 75px;
	`}
`;

export const Image = styled.div`
	grid-column: 1 / -1;
	position: relative;

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
