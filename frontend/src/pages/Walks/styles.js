import styled from "styled-components";

export const Card = {
	Outer: styled.div`
		padding: 0 5px;
		display: inline-block;
	`,
	Inner: styled.div`
		width: 300px;
		padding-bottom: 1%;
		/* max-height: ${({ height }) => (height ? height : "100%")}; */
		max-width: 700px;
		background-image: url(${({ src }) => src});
		background-size: cover;
		background-position: center;
	`,
};
