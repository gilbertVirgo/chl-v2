import { Bars, Inner, Outer } from "./styles";

import React from "react";

export default ({ active, onPointerDown }) => {
	return (
		<Outer onPointerDown={onPointerDown}>
			<Inner active={active}>
				<Bars.Top />
				<Bars.Middle />
				<Bars.Bottom />
			</Inner>
		</Outer>
	);
};
