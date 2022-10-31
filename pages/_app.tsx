import "/styles/globals.css";
import { Layout } from "@shared/components/layout/layout";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	if (router.pathname === "/unsupported-browser" || router.pathname === "/nepodporovany-prohlizec") {
		return <Component {...pageProps} />;
	}

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default appWithTranslation(MyApp);
