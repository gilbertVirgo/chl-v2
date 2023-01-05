import Button from "./Button";
import { Paragraph } from "./Text";
import React from "react";
import Section from "./Section";
import styled from "styled-components";
import theme from "../theme";

const Wrapper = styled.div`
	/* background-color: ${theme.color.dark};
	color: white; */
	/* padding: 15px; */
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 30px;
`;

export default ({ center }) => (
	<Wrapper>
		<Paragraph>
			Subscribe to the Christian Heritage London podcast on{" "}
			<strong>Apple Podcasts</strong> or <strong>Spotify</strong>
		</Paragraph>
		<Button
			style={center ? { marginLeft: "auto", marginRight: "auto" } : {}}
			dropdown
			options={{
				items: [
					{
						value: "Apple Podcasts",
						href: "https://podcasts.apple.com/gb/podcast/christian-heritage-london-podcast/id1232042916",
					},
					{
						value: "Spotify",
						href: "https://open.spotify.com/show/3DlsQAEvVPyeElP8klOEoe",
					},
				],
			}}
		>
			Subscribe
		</Button>
	</Wrapper>
);
