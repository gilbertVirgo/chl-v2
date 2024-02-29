import { Paragraph } from "./components/Text";
import theme from "./theme";

export default (status, message) => {
	switch (status) {
		case "sending":
			return <Paragraph small>Sending request...</Paragraph>;
		case "error":
			return (
				<Paragraph style={{ color: theme.color.red }}>
					There was an error: {message}
				</Paragraph>
			);
		case "success":
			return <Paragraph small>{message}</Paragraph>;
	}
};
