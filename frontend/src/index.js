import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import refreshMasterRef from "./prismic/refreshMasterRef";

const init = async () => {
	await refreshMasterRef().catch((err) => {
		console.error("Huge error.", err);

		ReactDOM.render(
			<React.Fragment>
				<h1>Error</h1>
				<p>
					We are experiencing problems right now. Please refresh the
					page now or try again later.
				</p>
				<p>
					If this problem persists, please{" "}
					<a href="mailto:info@christianheritagelondon.org?subject=Site%20failed%20to%20load">
						send a quick email
					</a>{" "}
					to our team informing them of the problem.
				</p>
			</React.Fragment>,
			document.getElementById("root")
		);
	});

	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		document.getElementById("root")
	);
};

init();
