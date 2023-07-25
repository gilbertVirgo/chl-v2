import { Paragraph } from "../../../../Text";
import formatDate from "../helpers/formatDate";
import media from "../../../../../media";
import styled from "styled-components";
import theme from "../../../../../theme";

const cellWidth = 35;

const Wrapper = styled(Paragraph)`
	${media.maxWidth("s")`
		/* Squares! .. sorta */
        line-height: calc((100vw / 7) - ${theme.gutter / 2}px);
        height: calc((100vw / 7) - ${theme.gutter / 2}px);
    `}

	${media.minWidth("s")`
        width: ${cellWidth}px;
        height: ${cellWidth}px;
        line-height: ${cellWidth}px;
    `}

	margin: 0;
	color: ${({ inSelectedMonth }) =>
		inSelectedMonth ? theme.color.dark : theme.color.muted};

	text-align: center;
	font-size: 14px;
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

	${({ selected }) =>
		selected ? `background-color: ${theme.color.red}; color: white;` : ""}

	${({ inRange }) =>
		inRange ? `background-color: ${theme.color.red}80; color: white;` : ""}

    ${({ disabled }) =>
		disabled ? `opacity: 0.5; color: ${theme.color.red};` : ""}

    &:hover {
		opacity: 0.5;
	}
`;

export default ({
	date,
	range,
	selected,
	inRange,
	onRangeStart,
	onRangeChange,
	onRangeFinish,
	...p
}) => {
	if (!p.disabled) {
		p = {
			...p,
			selected,
			inRange,
			onPointerDown: onRangeStart.bind(null, date, selected),
			onPointerUp: onRangeFinish.bind(null),
		};
	} else {
		p.title = "No walks available on this date";
	}

	if (range.length) p.onPointerEnter = onRangeChange.bind(null, date);

	return <Wrapper {...p}>{date.get("date")}</Wrapper>;
};
