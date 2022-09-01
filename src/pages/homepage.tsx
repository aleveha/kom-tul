import { config } from "@config/config";
import { Helmet } from "@shared/components/helmet/helmet";
import { AboutSection } from "@shared/pages/homepage/about-section";
import { HeroSection } from "@shared/pages/homepage/hero-section";
import { MainFocusSection } from "@shared/pages/homepage/main-focus-section";
import { StudyProgramsSection } from "@shared/pages/homepage/study-programs-section";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	return (
		<>
			<Helmet canonicalUrl={config.FRONTEND_URL + (locale === "en" ? "/en" : "/")} title={t("helmet.title")} />
			<HeroSection />
			<AboutSection />
			<MainFocusSection />
			<StudyProgramsSection />
		</>
	);
};
