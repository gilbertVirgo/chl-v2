import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

const burgerWidth = 24,
	burgerHeight = 24,
	barHeight = 2,
	barDefaults = `
    transform-origin: center;
    background-color: #000000;
    will-change: opacity, transform;
    transition: all 0.23s;
    width: ${burgerWidth}px;
    height: ${barHeight}px;
    position: absolute;
`;

export const Bars = {
	Top: styled.div`
		${barDefaults}
		top: ${burgerHeight / 2 - barHeight / 2 - 5}px;
	`,
	Middle: styled.div`
		${barDefaults}
		top: ${burgerHeight / 2 - barHeight / 2}px;
	`,
	Bottom: styled.div`
		${barDefaults}
		top: ${burgerHeight / 2 - barHeight / 2 + 5}px;
	`,
};

const OuterPadding = 10;

export const Outer = styled.div`
	${breakpoint("lg")`display: none`}

	cursor: pointer;
	padding: ${OuterPadding}px;
	margin-right: -${OuterPadding}px;
	grid-column: -2 / -1;
	justify-self: center;
	position: relative;
	z-index: 100000;
`;

export const Inner = styled.div`
	width: 24px;
	height: 24px;
	position: relative;
	transform-origin: center;

	${({ active }) =>
		active &&
		`
        ${Bars.Top} {
            transform: translateY(5px) rotate(45deg);
        }
        ${Bars.Middle} { opacity: 0; }
        ${Bars.Bottom} {
            transform: translateY(-5px) rotate(-45deg);
        }
    `}
`;
