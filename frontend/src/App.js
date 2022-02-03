import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import React from "react";

function App() {
	return (
		<React.Fragment>
			<Nav />

			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
}

export default App;
