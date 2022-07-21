import { Frame, Wrapper } from "./styles";

import React from "react";

export const Embed = ({ src }) => {
	return (
		<Wrapper>
			<Frame src={src} />
		</Wrapper>
	);
};
