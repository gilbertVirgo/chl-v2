import { Caption, VideoPlaceholder } from "./styles";

import Grid from "../Grid";
import React from "react";
import Video from "./components/Video";

export default ({ variant, children, video, thumbnail }) => {
	return (
		<Grid style={{ marginBottom: 0 }}>
			<Caption>{children}</Caption>
			<Video src={video} thumbnail={thumbnail}>
				{children}
				{/* There's a caption inside here as well, which only shows on large screens. Gross. */}
			</Video>
		</Grid>
	);
};
