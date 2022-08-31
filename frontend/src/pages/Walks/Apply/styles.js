import media from "../../../media";
import styled from "styled-components";

export const Image = styled.div`
	display: none;

	${media.minWidth("l")`
        grid-column: 7 / 12;
        grid-row: 1 / 9;
        display: block;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center top;
        background-image: url("${require("../../../assets/walks-apply-image.jpg")}");
        padding-bottom: 150%;
        height: auto;
    `}
`;
