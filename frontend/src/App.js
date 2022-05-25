import { Route, Routes } from "react-router-dom";

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

function App() {
	return (
		<React.Fragment>
			<Nav />

			<ScrollToTop>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/podcast" element={<Podcast />} />
					<Route path="/walks" element={<Walks />} />
					<Route
						path="/international-tours"
						element={<InternationalTours />}
					/>
					<Route path="/contact" element={<Contact />} />
					<Route path="/donate" element={<Donate />} />
				</Routes>
			</ScrollToTop>
			<Footer />
		</React.Fragment>
	);
}

export default App;
