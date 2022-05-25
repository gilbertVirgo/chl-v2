import media from "../../media";
import styled from "styled-components";

export const Image = styled.div`
	display: none;

	${media.minWidth("l")`
        grid-column: 7 / 12;
        grid-row: 1 / 7;
        display: block;
        background-size: cover;
        background-image: url("${require("../../assets/contact-us.png")}");
        padding-bottom: 150%;
        height: auto;
    `}
`;
