import { config } from "@config/config";
import { Helmet } from "@shared/components/helmet/helmet";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("unsupportedBrowser");
	const { locale } = useRouter();
	return (
		<>
			<Helmet
				canonicalUrl={
					config.FRONTEND_URL + (locale === "en" ? "/en/unsupported-browser" : "/nepodporovany-prohlizec")
				}
				title={t("helmet.title")}
			/>
			<h1 className="ui-typo-large font-bold">{t("content.title")}</h1>
			<p className="font-tul-mono">{t("content.description")}</p>
		</>
	);
};
