import { Body, FeatureGrid, Image, Title } from "./styles";

import Button from "../Button";
import Section from "../Section";

const Feature = ({ inverted, children }) => {
	return (
		<Section>
			<FeatureGrid inverted={inverted}>{children}</FeatureGrid>
		</Section>
	);
};

Feature.Title = ({ children }) => <Title>{children}</Title>;
Feature.Image = (props) => <Image {...props} />;
Feature.Body = ({ children, ...props }) => <Body {...props}>{children}</Body>;

export default Feature;
