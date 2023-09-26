import { Route, Switch, useHistory } from "react-router-dom";

import Apply from "./Apply";
import Success from "./Success";
import Walks from "./Walks";

export default () => (
	<Switch>
		<Route exact path="/walks" component={Walks} />
		<Route path="/walks/apply" component={Apply} />
		<Route path="/walks/success" component={Success} />
	</Switch>
);
