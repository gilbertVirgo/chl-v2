import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charset="utf-8" />
				<link rel="icon" href="/assets/favicon/favicon.ico" />
				<meta name="theme-color" content="#000000" />

				<meta http-equiv="cache-control" content="no-cache" />
				<meta http-equiv="expires" content="0" />
				<meta http-equiv="pragma" content="no-cache" />

				<link
					rel="apple-touch-icon-precomposed"
					sizes="57x57"
					href="/assets/favicon/apple-touch-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="114x114"
					href="/assets/favicon/apple-touch-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="72x72"
					href="/assets/favicon/apple-touch-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="144x144"
					href="/assets/favicon/apple-touch-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="60x60"
					href="/assets/favicon/apple-touch-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="120x120"
					href="/assets/favicon/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="76x76"
					href="/assets/favicon/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon-precomposed"
					sizes="152x152"
					href="/assets/favicon/apple-touch-icon-152x152.png"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/assets/favicon/favicon-196x196.png"
					sizes="196x196"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/assets/favicon/favicon-96x96.png"
					sizes="96x96"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/assets/favicon/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/assets/favicon/favicon-16x16.png"
					sizes="16x16"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/assets/favicon/favicon-128.png"
					sizes="128x128"
				/>
				<meta
					name="application-name"
					content="Christian Heritage London"
				/>
				<meta name="msapplication-TileColor" content="#FFFFFF" />
				<meta
					name="msapplication-TileImage"
					content="/assets/favicon/mstile-144x144.png"
				/>
				<meta
					name="msapplication-square70x70logo"
					content="/assets/favicon/mstile-70x70.png"
				/>
				<meta
					name="msapplication-square150x150logo"
					content="/assets/favicon/mstile-150x150.png"
				/>
				<meta
					name="msapplication-wide310x150logo"
					content="/assets/favicon/mstile-310x150.png"
				/>
				<meta
					name="msapplication-square310x310logo"
					content="/assets/favicon/mstile-310x310.png"
				/>

				<link rel="manifest" href="/assets/favicon/manifest.json" />

				<link
					rel="stylesheet"
					href="https://use.typekit.net/anf3enj.css"
				/>

				<script src="https://www.google.com/recaptcha/api.js"></script>

				<link rel="stylesheet" href="/global.css" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
