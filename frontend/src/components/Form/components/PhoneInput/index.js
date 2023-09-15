import * as Form from "../..";

import React from "react";
import areaCodes from "./area-codes";
import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 85px 1fr;

	* {
		grid-column: span 1 !important;
	}
`;

const HiddenSelect = styled.select`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
`;

const { dial_code: ukDialCode } = areaCodes.find(
	({ name }) => name === "United Kingdom"
);

// This will ignore the 'value' field. It's internally controlled
export default ({ onChange, required }) => {
	const { timeZone: userRegion } = Intl.DateTimeFormat().resolvedOptions();

	const dialCodeGuess = areaCodes.find(
		({ region }) => region === userRegion
	)?.dial_code;

	const [number, setNumber] = React.useState("");
	const [areaCode, setAreaCode] = React.useState(dialCodeGuess || ukDialCode);

	React.useEffect(() => {
		onChange(`(${areaCode}) ${number}`);
	}, [areaCode, number]);

	return (
		<React.Fragment>
			<Wrapper>
				<div style={{ position: "relative" }}>
					<Form.Select tabIndex="-1" style={{ border: "none" }}>
						<option value={areaCode}>{areaCode}</option>
					</Form.Select>
					<HiddenSelect
						tabIndex="-1"
						value={areaCode}
						onChange={({ target }) =>
							setAreaCode(
								target.options[target.selectedIndex].value
							)
						}
					>
						{areaCodes.map(({ name, dial_code, code }) => (
							<option value={dial_code}>
								{name} ({dial_code})
							</option>
						))}
					</HiddenSelect>
				</div>
				<Form.Input
					type="tel"
					value={number}
					onChange={({ target: { value } }) => setNumber(value)}
					{...{ required }}
				/>
			</Wrapper>
		</React.Fragment>
	);
};
