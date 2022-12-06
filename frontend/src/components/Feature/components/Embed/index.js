import { Frame, Wrapper } from "./styles";

import React from "react";

export const Embed = ({ src }) => {
	const ext = (src.includes("?") ? "&" : "?") + "modestbranding=1"; // removes YouTube branding

	return (
		<Wrapper>
			<Frame src={src + ext} />
		</Wrapper>
	);
};
