import { Caption, Paragraph } from "../../../../Text";

import { Icon } from "../../../../Button/styles";
import dayjs from "dayjs";
import styled from "styled-components";
import theme from "../../../../../theme";

const Wrapper = styled.div`
	grid-column: 1 / -1;
	background-color: ${theme.color.light};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	box-sizing: border-box;
	position: relative;
`;

const IconHitbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1 / 1;
	height: 100%;
	cursor: pointer;
`;

export default ({ selectedMonth, onChange }) => {
	return (
		<Wrapper>
			<IconHitbox
				onClick={onChange.bind(
					null,
					selectedMonth.subtract(1, "month")
				)}
			>
				<Icon type="chevron left" color={theme.color.dark} />
			</IconHitbox>

			<Paragraph small>
				<b>{selectedMonth.format("MMM YYYY")}</b>
			</Paragraph>
			<IconHitbox
				onClick={onChange.bind(null, selectedMonth.add(1, "month"))}
			>
				<Icon type="chevron right" color={theme.color.dark} />
			</IconHitbox>
		</Wrapper>
	);
};
