import media from "../media";
import styled from "styled-components";
import theme from "../theme";

const Outer = styled.section`
	${media.maxWidth("l")`
		${({ explode }) => explode && `padding: 25px 0;`}
	`}
	${media.minWidth("l")`
		${({ explode }) => explode && `padding: 75px 0;`}
	`}
	${({ dark }) => dark && `background-color: ${theme.color.dark}; color: white;`}
`;

const Inner = styled.div`
	height: 100%;
	padding: 50px 0;

	width: ${({ skinny }) => (skinny ? `560px` : `600px`)};
	margin: 0 auto;

	max-width: calc(100% - 30px);

	${media.minWidth("l")`
		padding: 75px 15px;
		width: ${({ skinny }) => (skinny ? `560px` : `1125px`)};
	`}

	${({ span }) =>
		span &&
		`width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; max-width: none !important;`}

	${({ deflate }) => deflate && `padding: 0 !important;`}
`;

export default ({
	as,
	children,
	dark,
	skinny,
	span,
	deflate,
	explode,
	outerStyle,
	innerStyle,
}) => {
	return (
		<Outer as={as} explode={explode} dark={dark} style={outerStyle}>
			<Inner
				style={innerStyle}
				span={span}
				skinny={skinny}
				deflate={deflate}
			>
				{children}
			</Inner>
		</Outer>
	);
};
