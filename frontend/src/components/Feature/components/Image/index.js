import { Link } from "react-router-dom";
import { Template } from "./styles";

export const Image = ({ href, ...props }) => (
	<Link to={href} style={{ gridArea: "media" }}>
		<Template {...props} />
	</Link>
);
