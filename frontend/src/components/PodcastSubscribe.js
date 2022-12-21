import Button from "./Button";
import { Paragraph } from "./Text";
import React from "react";

export default ({ center }) => (
	<React.Fragment>
		<Button
			style={center ? { marginLeft: "auto", marginRight: "auto" } : {}}
			dropdown
			center
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
	</React.Fragment>
);
