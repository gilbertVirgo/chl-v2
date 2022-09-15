import ActivityIndicator from "../../../components/ActivityIndicator";
import Article from "../../../components/Article";
import React from "react";
import getArticle from "./getArticle";
import { useParams } from "react-router-dom";

export default () => {
	const [props, setProps] = React.useState(null);

	const { id } = useParams();

	React.useEffect(() => {
		(async function () {
			const props = (await getArticle(id)).data[0];

			setProps(props);
		})();
	}, []);

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!props}>
				Loading...
			</ActivityIndicator>

			{!!props && <Article {...props} />}
		</React.Fragment>
	);
};
