import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

export default function MyApp({ Component, pageProps }) {
	return (
		<PrismicProvider client={client}>
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</PrismicProvider>
	);
}
