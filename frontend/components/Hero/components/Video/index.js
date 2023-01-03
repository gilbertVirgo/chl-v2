import { Caption, Frame, PlayButton, Thumbnail, Wrapper } from "./styles";

import React from "react";

export default ({ src, thumbnail, children }) => {
	const [showOverlay, setShowOverlay] = React.useState(true);

	return (
		<Wrapper>
			{!showOverlay && <Frame src={src + "?autoplay=1"} />}
			<Thumbnail src={thumbnail} show={showOverlay}>
				<PlayButton onClick={() => setShowOverlay(false)} />
				<Caption>{children}</Caption>
			</Thumbnail>
		</Wrapper>
	);
};
