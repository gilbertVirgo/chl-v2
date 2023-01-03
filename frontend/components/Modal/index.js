import { Overlay, Wrapper } from "./styles";

import Grid from "../Grid";
import React from "react";
import Section from "../Section";

export default ({ show, onClose, children }) => {
	const overlayRef = React.useRef();

	React.useEffect(() => {
		if (overlayRef.current) {
			if (show) {
				overlayRef.current.classList.add("show");
			} else {
				overlayRef.current.classList.remove("show");
			}
		}
	}, [show, overlayRef]);

	return (
		<Overlay ref={overlayRef}>
			<Section deflate>
				<Grid>
					<Wrapper>{children}</Wrapper>
				</Grid>
			</Section>
		</Overlay>
	);
};
