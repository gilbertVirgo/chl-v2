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

	let handleOverlayClicked = (event) => {
		console.log(
			overlayRef.current,
			event.target === overlayRef.current,
			overlayRef.current.contains(event.target)
		);

		if (event.target !== overlayRef.current) return;

		onClose();
	};

	return (
		<Overlay ref={overlayRef} onClick={handleOverlayClicked}>
			<Section deflate>
				<Grid onClick={() => console.log("test")}>
					<Wrapper>{children}</Wrapper>
				</Grid>
			</Section>
		</Overlay>
	);
};
