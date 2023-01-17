import Link from "next/link";
import { Template } from "./styles";

export const Image = ({ href, ...props }) => {
	console.log({ href });

	return (
		<Link href={href} style={{ gridArea: "media" }}>
			<Template {...props} />
		</Link>
	);
};
