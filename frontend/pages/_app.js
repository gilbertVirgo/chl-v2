import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Nav />
			<Component {...pageProps} />
		</React.Fragment>
	);
}
