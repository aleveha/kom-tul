import Head from "next/head";
import { memo } from "react";

export const Favicon = memo(() => (
	<Head>
		<link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
		<link rel="manifest" href="/static/favicon/site.webmanifest?v=1" crossOrigin="use-credentials" />
		<link rel="shortcut icon" href="/static/favicon/favicon.ico?v=1" />
		<meta name="apple-mobile-web-app-title" content="UX Fans" />
		<meta name="application-name" content="UX Fans" />
		<meta name="msapplication-TileColor" content="#140939" />
		<meta name="msapplication-config" content="/static/favicon/browserconfig.xml?v=1" />
		<meta name="theme-color" content="#140939" />
	</Head>
));

Favicon.displayName = "Favicon";
