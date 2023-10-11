import media from "../../../../media";
import styled from "styled-components";
import theme from "../../../../theme";

export const Template = styled.div`
	background-image: url("${({ src }) => src}");
	background-size: cover;
	background-position: center;
	padding-bottom: calc(9 / 16 * 100%);

	${media.maxWidth("l")`
        width: calc(100% + 30px);
        margin-left: -15px;
		padding-bottom: calc(9 / 16 * (100% + 30px));
    `}

	${({ filter }) => filter && `filter: ${theme.imageFilter};`}
`;
