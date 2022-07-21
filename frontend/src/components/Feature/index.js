import { Body, FeatureGrid, Title } from "./styles";

import { Embed } from "./components/Embed";
import { Image } from "./components/Image";

// Prop options: invert, deflate
const Feature = ({ children, ...props }) => {
	return <FeatureGrid {...props}>{children}</FeatureGrid>;
};

Feature.Title = ({ children }) => <Title>{children}</Title>;
Feature.Embed = (props) => <Embed {...props} />;
Feature.Image = (props) => <Image {...props} />;
Feature.Body = ({ children, ...props }) => <Body {...props}>{children}</Body>;

export default Feature;
