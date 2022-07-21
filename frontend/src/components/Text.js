import media from "../media";
import styled from "styled-components";
import theme from "../theme";

export const Heading = styled.h1`
	font-family: "urw-antiqua";
	font-style: italic;
	font-weight: 800;
	font-size: 32px;
	line-height: 106.3%;

	margin: 0 0 15px;

	${media.minWidth("l")`
        font-size: 42px;

		${({ margin }) => margin && `margin-bottom: 30px;`}
    `}

	${media.maxWidth("l")`
	${({ margin }) => margin && `margin-bottom: 15px;`}
	`}
`;

export const Paragraph = styled.p`
	font-family: "myriad-pro";
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	line-height: 130.3%;
	margin: 0 0 15px;

	${({ small }) =>
		small &&
		`
		font-size: 14px;
	`}
`;

export const Caption = styled.h5`
	font-family: "myriad-pro";
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 14px;
	text-transform: uppercase;

	color: #5f5f5f;

	margin: 0;
`;

export const Subheading = styled.h3`
	font-family: "myriad-pro";
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	line-height: 130.3%;
	color: ${theme.color.dark};
	margin: 0 0 15px;
`;
