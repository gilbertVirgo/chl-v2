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

export const ConnectWrapper = styled.div`
	grid-column: 1 / -1;

	display: grid;
	grid-template-columns: 1fr;
	row-gap: 15px;

	${media.minWidth("l")`
		grid-column: -5 / -1;
		row-gap: 30px;
	`}
`;

export const SocialIcon = styled.a.attrs({ target: "_blank" })`
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
	align-items: center;
	justify-content: space-between;
	width: calc(3 * 36px + 2 * 15px);
	margin: 0 auto;

	${media.minWidth("l")`
		margin-left: auto; margin-right: 0;
	`}
`;

export const LinksWrapper = styled.div`
	gap: 30px;
	row-gap: 30px;
	display: flex;
	justify-content: center;

	${media.minWidth("l")`
		justify-content: flex-end;
	`}
`;
