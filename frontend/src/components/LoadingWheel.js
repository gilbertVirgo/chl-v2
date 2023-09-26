import { Oval } from "react-loader-spinner";
import theme from "../theme";

const sizeDict = {
	sm: 18,
	md: 36,
	lg: 48,
};

export default ({ size, color = theme.color.red }) => (
	<Oval
		secondaryColor="#e1e1e1"
		color={color}
		width={sizeDict[size]}
		height={sizeDict[size]}
	/>
);
