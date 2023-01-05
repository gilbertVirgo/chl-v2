import { Background, CloseButton, Frame, FrameWrapper } from "./styles";

import Grid from "../Grid";
import React from "react";
import Section from "../Section";

export default ({ src, onClose, ...props }) => {
	const [active, setActive] = React.useState(false);

	const handleClose = async () => {
		setActive(false);

		setTimeout(onClose, 230);
	};

	React.useEffect(() => {
		setActive(true);
	}, []);

	return (
		<Background active={active} onClick={handleClose}>
			<CloseButton onClick={handleClose} />
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
