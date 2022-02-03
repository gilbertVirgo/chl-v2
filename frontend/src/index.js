import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider
				theme={{
					breakpoints: {
						xs: 0,
						sm: 576,
						md: 768,
						lg: 992,
						xl: 1200,
					},
				}}
			>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
