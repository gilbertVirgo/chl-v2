import React from "react";
import { useParams } from "react-router-dom";

export default () => {
	const [episode, setEpisode] = React.useState();

	const { id } = useParams();

	React.useEffect(() => {
		(async function () {})();
	}, []);

	return <React.Fragment></React.Fragment>;
};
