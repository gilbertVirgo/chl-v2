import { Background, CloseButton, Frame, FrameWrapper, Player } from "./styles";

import Grid from "../Grid";
import React from "react";
import Section from "../Section";

export default ({ src, onClose, ...props }) => {
	return (
		<Background active={!!src} onClick={onClose}>
			<CloseButton onClick={onClose} />
			<Section
				outerStyle={{
					position: "relative",
					top: "50%",
					transform: "translateY(-50%)",
				}}
			>
				<Grid>
					<FrameWrapper onClick={(e) => e.stopPropagation()}>
						<Frame
							frameBorder="0"
							width="100%"
							height="100%"
							src={src}
							{...props}
						/>
					</FrameWrapper>
				</Grid>
			</Section>
		</Background>
	);
};
