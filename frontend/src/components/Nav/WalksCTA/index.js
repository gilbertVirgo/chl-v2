import { Link } from "react-router-dom";
import { Paragraph } from "../../Text";
import React from "react";
import { Wrapper } from "./styles";

export default () => {
	return (
		<Wrapper>
			<Paragraph small style={{ marginBottom: 0 }}>
				We offer Guided Walks &amp; Tours.{" "}
				<strong>
					<Link to="/walks">Find out more</Link>
				</strong>
			</Paragraph>
		</Wrapper>
	);
};
