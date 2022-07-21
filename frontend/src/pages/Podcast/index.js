import { Route, Switch, useHistory } from "react-router-dom";

import Episode from "./Episode";
import Podcast from "./Podcast";

export default () => (
	<Switch>
		<Route exact path="/podcast" component={Podcast} />
		<Route path="/podcast/episode/:id" component={Episode} />
	</Switch>
);
