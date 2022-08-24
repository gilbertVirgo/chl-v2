import { Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InternationalTours from "./pages/InternationalTours";
import Nav from "./components/Nav";
import Podcast from "./pages/Podcast";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Walks from "./pages/Walks";
import refreshMasterRef from "./refreshMasterRef";

function App() {
	React.useEffect(function () {
		refreshMasterRef();
	}, []);

	return (
		<React.Fragment>
			<Nav />

			<ScrollToTop>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/podcast" component={Podcast} />
					<Route path="/walks" component={Walks} />
					<Route
						path="/international-tours"
						component={InternationalTours}
					/>
					<Route path="/contact/:category?" component={Contact} />
					<Route path="/donate" component={Donate} />
				</Switch>
			</ScrollToTop>
			<Footer />
		</React.Fragment>
	);
}

export default App;
