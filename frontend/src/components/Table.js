import { Paragraph, Subheading } from "./Text";

import styled from "styled-components";
import theme from "../theme";

const Table = styled.table`
	${({ scrollable }) => scrollable && `min-width: 1200px;`}

	&,
	tr,
	td {
		border-collapse: collapse;
		box-sizing: border-box;
		vertical-align: top;
	}

	thead td {
		border-top: none;
	}

	tbody tr:last-child td {
		border-bottom: none;
	}

	td {
		padding: 15px;
		border: 1px solid ${theme.color.light};

		&:first-child {
			border-left: none;
		}
		&:last-child {
			border-right: none;
		}
	}

	${Paragraph}, ${Subheading} {
		margin: 0;
	}
`;

const Wrapper = styled.div`
	overflow-x: scroll;
`;

export default ({ children, scrollable, ...props }) => (
	<Wrapper>
		<Table scrollable={scrollable} {...props}>
			{children}
		</Table>
	</Wrapper>
);
