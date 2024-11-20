import { Route, Switch, useHistory } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import ErrorCapture from "./pages/ErrorCapture";
import ErrorContext from "./ErrorContext";
import Event from "./pages/Event";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Intelligencer from "./pages/Intelligencer";
import InternationalTours from "./pages/InternationalTours";
import Nav from "./components/Nav";
import Podcast from "./pages/Podcast";
import Privacy from "./pages/Privacy";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Walks from "./pages/Walks";

function App() {
	const history = useHistory();
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		if (error) history.push("/error");
	}, [error]);

	return (
		<React.Fragment>
			<Nav />

			<ScrollToTop>
				<ErrorContext.Provider value={{ error, setError }}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/podcast" component={Podcast} />
						<Route path="/articles" component={Blog} />
						<Route path="/event/:uid" component={Event} />
						<Route path="/walks" component={Walks} />
						<Route
							path="/international-tours"
							component={InternationalTours}
						/>
						<Route
							path="/intelligencer"
							component={Intelligencer}
						/>
						<Route path="/contact/:category?" component={Contact} />
						<Route path="/donate" component={Donate} />
						<Route path="/privacy" component={Privacy} />
						<Route path="/error" component={ErrorCapture} />
					</Switch>
				</ErrorContext.Provider>
			</ScrollToTop>
			<Footer />
		</React.Fragment>
	);
}

export default App;
