import { Caption, Paragraph } from "../Text";

import media from "../../media";
import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: #1a1a1a;
	padding: 50px 0;

	${media.minWidth("l")`
		padding: 100px 0;
		margin-bottom: 0;
	`}
`;

export const Strapline = styled.div`
	grid-column: 1 / -1;
	margin-bottom: 35px;

	${media.minWidth("l")`
		grid-column: 1 / 7;
		margin-bottom: 0;

	`}
`;

export const Verse = styled(Paragraph)`
	color: white;
	font-size: 24px;
	line-height: 29px;
	margin-bottom: 8px;

	${media.minWidth("l")`
        font-size: 28px;
        line-height: 34px;
    `}
`;

export const Reference = styled(Caption)`
	color: white;
`;

export const SocialIcon = styled.a`
	text-decoration: none;
	background-image: url("${({ icon }) => icon}");
	background-size: cover;
	width: 36px;
	height: 36px;

	transition: transform 0.23s;
	transform-origin: center center;

	&:hover {
		transform: scale(1.1, 1.1);
	}
`;

export const SocialsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: calc(3 * 36px + 2 * 15px);
	height: 100%;
	grid-column: 1 / -1;
	margin: 0 auto;
	align-items: center;
	justify-content: space-between;

	${media.minWidth("l")`
		grid-column: -3 / -1;
	`}
`;
