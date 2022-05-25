import { Description, Image, Panel, Subtitle, Title } from "./styles";

import Button from "../Button";
import Grid from "../Grid";
import { Link } from "react-router-dom";

export default ({ panels, squares, circles, ...props }) => (
	<Grid {...props}>
		{panels.map(
			({ title, subtitle, image, description, externalLink }, index) => (
				<Panel className="panel" key={`panel-${index}`}>
					<Image square={squares} circle={circles} src={image} />
					<Title large={!!description}>{title}</Title>
					{subtitle && <Subtitle>{subtitle}</Subtitle>}
					{description && <Description>{description}</Description>}
					{externalLink && (
						<Button
							href={externalLink.href}
							small
							theme="grey"
							external
						>
							{externalLink.text}
						</Button>
					)}
				</Panel>
			)
		)}
	</Grid>
);
