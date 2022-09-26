import { config } from "@config/config";
import { Helmet } from "@shared/components/helmet/helmet";
import { Project, ProjectsSection } from "@shared/pages/projects/projects-section";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Page: NextPage = () => {
	const { t } = useTranslation("projects");
	const { locale } = useRouter();

	return (
		<>
			<Helmet
				canonicalUrl={config.FRONTEND_URL + (locale === "en" ? "/en/projects" : "/projekty")}
				title={t("helmet.title")}
			/>
			<div>
				<h1 className="sr-only">{t("title")}</h1>
				<ProjectsSection
					projects={t("actualProjects.projects", { returnObjects: true }) as Project[]}
					title={t("actualProjects.title")}
				/>
			</div>
			<ProjectsSection
				projects={t("archivedProjects.projects", { returnObjects: true }) as Project[]}
				title={t("archivedProjects.title")}
			/>
		</>
	);
};
