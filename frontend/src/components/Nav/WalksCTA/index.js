import { Link } from "react-router-dom";
import { Paragraph } from "../../Text";
import React from "react";
import { Wrapper } from "./styles";

export default () => {
	return (
		<Wrapper>
			<Paragraph small style={{ marginBottom: 0 }}>
				Christian Heritage London gives{" "}
				<strong>
					<Link to="/walks">guided walks and tours</Link>
				</strong>{" "}
				through London's Church History.{" "}
				<strong>
					<Link to="/walks">Find out more</Link>
				</strong>
			</Paragraph>
		</Wrapper>
	);
};
