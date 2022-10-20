import { Helmet } from "@shared/components/helmet/helmet";
import { AboutSection } from "@shared/pages/cooperation/about-section";
import { HowToCooperateSection } from "@shared/pages/cooperation/how-to-cooperate-section";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("cooperation");
	const { locale } = useRouter();

	return (
		<>
			<Helmet
				canonicalUrl={locale === "en" ? "/en/cooperation" : "/spoluprace"}
				metaTagData={{ metaDescription: t("helmet.description") }}
				title={t("helmet.title")}
			/>
			<AboutSection />
			<HowToCooperateSection />
		</>
	);
};
