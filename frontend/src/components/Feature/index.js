import { Body, FeatureGrid, Image, Title } from "./styles";

// Prop options: invert, deflate
const Feature = ({ children, ...props }) => {
	return <FeatureGrid {...props}>{children}</FeatureGrid>;
};

Feature.Title = ({ children }) => <Title>{children}</Title>;
Feature.Image = (props) => <Image {...props} />;
Feature.Body = ({ children, ...props }) => <Body {...props}>{children}</Body>;

export default Feature;
