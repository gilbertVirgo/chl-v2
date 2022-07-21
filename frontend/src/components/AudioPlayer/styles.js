import { Paragraph } from "../Text";
import media from "../../media";
import styled from "styled-components";

export const Wrapper = styled.div`
	grid-column: 1 / -1;

	display: grid;
	grid-template-areas:
		"bar bar bar bar bar"
		"cur rew pla fwd dur";
	grid-template-columns: 1fr 75px 50px 75px 1fr;

	row-gap: 12px;

	${media.minWidth("l")`
        grid-column: 4 / -4;
    `}

	user-select: none;
`;

const barWrapperHeight = 16;
export const BarWrapper = styled.div`
	grid-area: bar;
	height: ${barWrapperHeight}px;
	/* padding: 3px 0; */
	box-sizing: border-box;
	position: relative;
`;

const barHeight = 4;
export const Bar = styled.div`
	height: ${barHeight}px;
	margin: ${(barWrapperHeight - barHeight) / 2}px 0;
	border-radius: ${barHeight}px;
	background-color: #e5e5e5; // #1a1a1a;
`;

export const CompletedBar = styled.div`
	height: ${barHeight}px;
	margin: ${(barWrapperHeight - barHeight) / 2}px 0;
	border-radius: ${barHeight}px;
	background-color: #b02834;

	position: absolute;
	left: 0;
	top: 0;
	z-index: 2;

	width: 0;
`;

export const Handle = styled.div`
	border-radius: 10px;
	width: 16px;
	height: 16px;

	background-color: white;
	box-shadow: 0 2px 5px #1a1a1a60;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 3;

	will-change: transform;
	transition: transform 0.1s;
	cursor: pointer;
`;

const tickerStyles = `
	font-size: 12px;
	margin-top: -10px;
`;
export const CurrentTime = styled(Paragraph)`
	${tickerStyles}
	grid-area: cur;
	text-align: left;
`;

export const Duration = styled(Paragraph)`
	${tickerStyles}
	grid-area: dur;
	text-align: right;
`;

const buttonStyles = `
	background-color: #1a1a1a;
	mask-position: center;
	height: 40px;
	mask-repeat: no-repeat;
	appearance: none;
	border: none;
	cursor: pointer;
`;

export const Rewind = styled.button`
	${buttonStyles}
	mask-image: url("${require("../../assets/icons/rewind.svg").default}");
	mask-size: 24px 16px;
`;

export const Forward = styled.button`
	${buttonStyles}
	mask-image: url("${require("../../assets/icons/fast-forward.svg")
		.default}");
	mask-size: 23px 16px;
`;

export const Play = styled.button`
	${buttonStyles}
	mask-image: url("${({ paused }) =>
		paused
			? require("../../assets/icons/play.svg").default
			: require("../../assets/icons/pause.svg").default}");
	mask-size: 40px 40px;
`;
