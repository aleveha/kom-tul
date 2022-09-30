import { Helmet } from "@shared/components/helmet/helmet";
import { AllLaboratoriesSection } from "@shared/pages/laboratories/all-laboratories-section";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("laboratories");
	const { locale } = useRouter();

	return (
		<>
			<Helmet canonicalUrl={locale === "en" ? "/en/laboratories" : "/laboratore"} title={t("helmet.title")} />
			<AllLaboratoriesSection />
		</>
	);
};
