import { Helmet } from "@shared/components/helmet/helmet";
import { LaboratoryInfo } from "@shared/pages/laboratories/laboratory-info";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import labOfEngineeringMetrologyImg from "public/images/laboratories/lab-of-engineering-metrology.jpg";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("laboratories");
	const { locale } = useRouter();

	return (
		<>
			<Helmet
				canonicalUrl={
					locale === "en"
						? "/en/laboratories/laboratory-of-engineering-metrology"
						: "/laboratore/laborator-strojirenske-metrologie"
				}
				metaTagData={{ metaDescription: t("labs.engineeringMetrology.helmet.description") }}
				title={t("labs.engineeringMetrology.helmet.title")}
			/>
			<LaboratoryInfo
				equipment={t("labs.engineeringMetrology.equipment", { returnObjects: true })}
				focus={t("labs.engineeringMetrology.focus", { returnObjects: true })}
				image={labOfEngineeringMetrologyImg}
				mainAim={t("labs.engineeringMetrology.mainAim")}
				services={t("labs.engineeringMetrology.services", { returnObjects: true })}
				title={t("labs.engineeringMetrology.preview.name")}
			/>
		</>
	);
};
