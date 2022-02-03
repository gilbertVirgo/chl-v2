import { Bars, Inner, Outer } from "./styles";

import React from "react";

export default ({ active, onClick }) => {
	return (
		<Outer onClick={onClick}>
			<Inner active={active}>
				<Bars.Top />
				<Bars.Middle />
				<Bars.Bottom />
			</Inner>
		</Outer>
	);
};
