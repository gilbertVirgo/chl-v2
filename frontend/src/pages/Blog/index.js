import { Route, Switch, useHistory } from "react-router-dom";

import Article from "./Article";
import Blog from "./Blog";

export default () => (
	<Switch>
		<Route exact path="/articles" component={Blog} />
		<Route path="/articles/:id" component={Article} />
	</Switch>
);

// --
// In the middle of repurposing Podcast to a Blog thing
// --
