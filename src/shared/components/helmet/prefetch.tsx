import Head from "next/head";
import { memo } from "react";

export const Prefetch = memo(() => (
	<Head>
		<link as="font" crossOrigin="anonymous" href="/static/fonts/inter/inter-regular.woff2" rel="preload" />
		<link as="font" crossOrigin="anonymous" href="/static/fonts/tul-mono/tul-mono-700.woff2" rel="preload" />
		<link as="font" crossOrigin="anonymous" href="/static/fonts/tul-mono/tul-mono-regular.woff2" rel="preload" />
	</Head>
));

Prefetch.displayName = "Prefetch";
