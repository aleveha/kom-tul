import { Helmet } from "@shared/components/helmet/helmet";
import { AssistantsSection } from "@shared/pages/employees/assistants-section";
import { MainEmployeesSection } from "@shared/pages/employees/main-employees-section";
import { PhDStudentsSection } from "@shared/pages/employees/phd-section";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("employees");
	const { locale } = useRouter();

	return (
		<>
			<Helmet
				canonicalUrl={locale === "en" ? "/en/employees" : "/pracovnici"}
				metaTagData={{ metaDescription: t("helmet.description") }}
				title={t("helmet.title")}
			/>
			<MainEmployeesSection />
			<AssistantsSection />
			<PhDStudentsSection />
		</>
	);
};
