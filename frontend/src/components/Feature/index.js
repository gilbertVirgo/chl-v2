import { Author, Body, FeatureGrid, Header, Title } from "./styles";

import { Embed } from "./components/Embed";
import { Image } from "./components/Image";

// Prop options: invert, deflate
const Feature = ({ children, ...props }) => {
	return <FeatureGrid {...props}>{children}</FeatureGrid>;
};

Feature.Header = Header;
Feature.Title = Title;
Feature.Author = Author;
Feature.Embed = Embed;
Feature.Image = Image;
Feature.Body = Body;

export default Feature;
