import { Description, Image, Panel, Subtitle, Title } from "./styles";

import Grid from "../Grid";

export default ({ panels, squares, circles, ...props }) => (
	<Grid {...props}>
		{panels.map(({ title, subtitle, image, description }, index) => (
			<Panel className="panel" key={`panel-${index}`}>
				<Image square={squares} circle={circles} src={image} />
				<Title large={!!description}>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
				{description && <Description>{description}</Description>}
			</Panel>
		))}
	</Grid>
);
