import { Heading, Paragraph } from "../../../components/Text";

import Button from "../../../components/Button";
import DefaultGrid from "../../../components/Grid";
import media from "../../../media";
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
