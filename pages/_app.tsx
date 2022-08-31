import "/styles/globals.css";
import { Layout } from "@shared/components/layout/layout";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default appWithTranslation(MyApp);
