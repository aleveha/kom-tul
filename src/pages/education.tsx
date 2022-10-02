import { Helmet } from "@shared/components/helmet/helmet";
import { BachelorDegreeSection } from "@shared/pages/education/bachelor-degree-section";
import { DoctorDegreeSection } from "@shared/pages/education/doctor-degree-section";
import { MasterDegreeSection } from "@shared/pages/education/master-degree-section";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("education");
	const { locale } = useRouter();

	return (
		<>
			<Helmet canonicalUrl={locale === "en" ? "/en/education" : "vyuka"} title={t("helmet.title")} />
			<BachelorDegreeSection />
			<MasterDegreeSection />
			<DoctorDegreeSection />
		</>
	);
};
