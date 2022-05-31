import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	transition: opacity 0.23s;
	transition-delay: 1s;

	${({ active }) => !active && `opacity: 0; pointer-events: none;`}

	${({ fullScreen }) =>
		fullScreen
			? `
		left: 0; top: 0;
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 99999;
		background-color: white;
		`
			: `
		margin: 30px 0;
		width: 100%;
		grid-column: 1 / -1;
		height: 100px;
	`}
`;
