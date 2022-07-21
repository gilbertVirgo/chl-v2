import { Route, Switch, useHistory } from "react-router-dom";

import Apply from "./Apply";
import Walks from "./Walks";

export default () => (
	<Switch>
		<Route exact path="/walks" component={Walks} />
		<Route path="/walks/apply" component={Apply} />
	</Switch>
);
