import media from "../media";
import styled from "styled-components";

const Outer = styled.section`
	${media.maxWidth("l")`
		${({ explode }) => explode && `padding: 25px 0;`}
	`}
	${media.minWidth("l")`
		${({ explode }) => explode && `padding: 75px 0;`}
	`}
	${({ dark }) => dark && `background-color: #1a1a1a; color: white;`}
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

	${({ deflate }) => deflate && `padding: 0 !important;`}
`;

export default ({
	as,
	children,
	dark,
	skinny,
	deflate,
	explode,
	outerStyle,
	innerStyle,
}) => {
	return (
		<Outer as={as} explode={explode} dark={dark} style={outerStyle}>
			<Inner style={innerStyle} skinny={skinny} deflate={deflate}>
				{children}
			</Inner>
		</Outer>
	);
};
