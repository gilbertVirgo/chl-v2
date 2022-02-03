import { Image, Panel, Subtitle, Title } from "./styles";

import Grid from "../Grid";
import Section from "../Section";

export default ({ panels }) => (
	<Section>
		<Grid>
			{panels.map(({ title, subtitle, image }) => (
				<Panel>
					<Image src={image} />
					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
				</Panel>
			))}
		</Grid>
	</Section>
);
