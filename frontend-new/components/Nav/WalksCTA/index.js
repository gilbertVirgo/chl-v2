import Link from "next/link";
import { Paragraph } from "../../Text";
import React from "react";
import { Wrapper } from "./styles";

export default () => {
	return (
		<Wrapper>
			<Paragraph small style={{ marginBottom: 0 }}>
				Christian Heritage London gives{" "}
				<strong>
					<Link href="/walks">guided walks and tours</Link>
				</strong>{" "}
				through London's Church History.{" "}
				<strong>
					<Link href="/walks">Find out more</Link>
				</strong>
			</Paragraph>
		</Wrapper>
	);
};
