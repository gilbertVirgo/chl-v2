import media from "../../../media";
import styled from "styled-components";

export const Image = styled.div`
	display: none;

	${media.minWidth("l")`
        grid-column: 7 / 12;
        grid-row: 1 / 7;
        display: block;
        background-size: cover;
        background-position: center;
        background-image: url("${require("../../../assets/walks/2.jpg")}");
        padding-bottom: 150%;
        height: auto;
    `}
`;
