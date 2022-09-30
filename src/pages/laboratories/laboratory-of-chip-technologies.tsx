import { Helmet } from "@shared/components/helmet/helmet";
import { LaboratoryInfo } from "@shared/pages/laboratories/laboratory-info";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import labOfChipTechnologiesImg from "public/images/laboratories/lab-of-chip-technologies.jpg";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("laboratories");
	const { locale } = useRouter();

	return (
		<>
			<Helmet
				canonicalUrl={
					locale === "en"
						? "/en/laboratories/laboratory-of-chip-technologies"
						: "/laboratore/laborator-triskovych-technologii-a-procesu"
				}
				title={t("labs.chipTechnologies.preview.name")}
			/>
			<LaboratoryInfo
				equipment={t("labs.chipTechnologies.equipment", { returnObjects: true })}
				focus={t("labs.chipTechnologies.focus", { returnObjects: true })}
				image={labOfChipTechnologiesImg}
				mainAim={t("labs.chipTechnologies.mainAim")}
				services={t("labs.chipTechnologies.services", { returnObjects: true })}
				title={t("labs.chipTechnologies.preview.name")}
			/>
		</>
	);
};
