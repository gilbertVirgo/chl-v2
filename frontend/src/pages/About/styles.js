import Grid from "../../components/Grid";
import media from "../../media";
import styled from "styled-components";

export const Banner = styled.div`
	position: relative;
	transform: translateX(50%);
	left: -50%;
	width: 100vw;

	background-repeat: no-repeat;
	background-size: 100% auto;

	${media.maxWidth("m")`
		background-image: url("${require("../../assets/urban-mobile.jpg")}");
		padding-top: 330px;
	`}

	${media.minWidth("m")`
		background-image: url("${require("../../assets/urban-desktop.jpg")}");
		min-height: 40vw;
        background-size: 50% auto;

		/* display: flex;
		align-items: center; */
    `}
`;

export const Names = styled.div`
	background-image: url("${require("../../assets/names.svg").default}");
	background-size: contain;
	background-repeat: no-repeat;
	grid-column: 1 / -1;
	padding-bottom: calc(21200% / 330);
	margin-bottom: 15px;

	${media.minWidth("m")`
		padding-bottom: calc(14100% / 252);
		transform: translateY(8%);
		grid-column: 6 / 12;
	`}
`;

export const Text = styled.div`
	grid-column: 1 / -1;

	${media.minWidth("m")`
		grid-column: 8 / 12;
	`}
`;
