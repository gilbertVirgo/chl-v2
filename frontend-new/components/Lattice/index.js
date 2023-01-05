import { Description, Image, Panel, Subtitle, Title } from "./styles";

import Button from "../Button";
import Grid from "../Grid";
import Link from "next/link";

// Need to dedicate more time to this move

// This is a key resource https://prismic.io/docs/fetch-data-nextjs
// ... as is this https://prismic.io/docs/setup-nextjs

export default ({
	panels,
	squares,
	filterImages,
	circles,
	button,
	...props
}) => (
	<Grid {...props}>
		{panels.map(
			(
				{ title, subtitle, image, description, author, button, href },
				index
			) => (
				<Panel className="panel" key={`panel-${index}`}>
					<Image
						square={squares}
						circle={circles}
						src={image}
						href={href}
						filter={filterImages}
					/>
					<Title large={!!description}>{title}</Title>
					{(subtitle || author) && (
						<Subtitle>{subtitle || author}</Subtitle>
					)}
					{description && <Description>{description}</Description>}
					{button && (
						<Button small theme="grey" {...button}>
							{button.text}
						</Button>
					)}
				</Panel>
			)
		)}
	</Grid>
);
