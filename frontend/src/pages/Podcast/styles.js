import media from "../../media";
import styled from "styled-components";

const Wrapper = styled.div`
	grid-column: 1 / -1;
	position: relative;

	${media.minWidth("l")`
        grid-column: 3 / -3;
    `}
`;

const PlayButton = styled.div`
	mask-image: url("${require("../../assets/icons/play.svg").default}");
	mask-size: cover;
	mask-position: center;
	background-color: white;

	width: 60%;
	height: 60%;

	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const Thumbnail = styled.div`
	padding-bottom: calc(9 / 16 * 100%);
	cursor: pointer;

	background-size: cover;
	background-position: center;
	background-image: url("${({ src }) => src}");
`;

export const Hero = () => {
	const [showThumbnail, setShowThumbnail] = React.useState(true);

	return (
		<Wrapper>
			{showThumbnail && (
				<Thumbnail onClick={() => setShowThumbnail(false)}>
					<PlayButton />
				</Thumbnail>
			)}
			{/* Video here */}
		</Wrapper>
	);
};
