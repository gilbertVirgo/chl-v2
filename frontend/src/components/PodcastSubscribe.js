import Button from "./Button";

export default () => (
	<Button
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
					href: "https://podcasts.apple.com/gb/podcast/christian-heritage-london-podcast/id1232042916",
				},
			],
		}}
	>
		Subscribe
	</Button>
);
