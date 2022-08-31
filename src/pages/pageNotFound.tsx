import { config } from "@config/config";
import { Button } from "@shared/components/button/button";
import { Helmet } from "@shared/components/helmet/helmet";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("pageNotFound");
	const { locale } = useRouter();

	return (
		<>
			<Helmet
				canonicalUrl={config.FRONTEND_URL + (locale === "en" ? "/en/404" : "/404")}
				title={t("helmet.title")}
				metaTagData={{
					metaTitle: t("helmet.title"),
					metaDescription: t("helmet.description"),
					image: `/og-images/${locale}/404.png`,
				}}
			/>
			<div className="flex h-full flex-col items-center justify-center space-y-8">
				<h1 className="font-tul-mono text-[6rem] text-tulViolet md:text-[10rem]">404</h1>
				<h2 className="text-center font-tul-mono text-h3 font-bold md:text-h1">{t("heading")}</h2>
				<p className="text-center font-tul-mono sm:w-2/3">{t("description")}</p>
				<Button href="/">{t("button")}</Button>
			</div>
		</>
	);
};
