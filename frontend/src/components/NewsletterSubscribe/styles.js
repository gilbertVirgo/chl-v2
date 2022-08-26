import Button from "../Button";
import { Input } from "../Form";
import styled from "styled-components";

export const Wrapper = styled.div`
	height: 40px;
	display: flex;
	align-items: top;
	position: relative;

	input {
		flex: 1;
	}

	button {
		line-height: 14px;
		margin-left: -2px;
	}

	input,
	button {
		height: 100% !important;
		border-radius: 0;

		&:focus {
			border-color: white !important;
		}
	}
`;
