import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import { PrismicProvider } from "@prismicio/react";
import React from "react";

export default function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<PrismicProvider
				internalLinkComponent={(props) => <Link {...props} />}
			>
				<Nav />
				<Component {...pageProps} />
				<Footer />
			</PrismicProvider>
		</React.Fragment>
	);
}
