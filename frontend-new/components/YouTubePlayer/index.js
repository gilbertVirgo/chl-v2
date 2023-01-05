import { Frame, FrameWrapper } from "./styles";

import React from "react";
import parseYouTubeURL from "./parseYouTubeURL";

export default ({ src }) => {
	return (
		<FrameWrapper>
			<Frame
				frameBorder="0"
				width="100%"
				height="100%"
				src={parseYouTubeURL(src)}
			/>
		</FrameWrapper>
	);
};
