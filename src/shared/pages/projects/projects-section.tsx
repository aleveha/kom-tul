import { InfoTile } from "@shared/components/info-tile/info-tile";
import { useTranslation } from "next-i18next";
import React, { FC, useCallback } from "react";

export interface Project {
	coSolver?: string;
	mainRecipient?: string;
	name: string;
	number: string;
	program?: string;
	provider?: string;
	recipient?: string;
	solver?: string;
	solvingTerm?: string;
	withEULogo?: boolean;
}

interface Props {
	projects: Project[];
	title: string;
}

export const ProjectsSection: FC<Props> = ({ projects, title }) => {
	const { t } = useTranslation("projects");

	const mapProject = useCallback(
		(project: Project) => {
			const result: string[] = [];

			Object.entries(project).forEach(([key, value]) => {
				if (key !== "withEULogo") {
					result.push(t(`projectInfoLabels.${key}`) + `: ${value}`);
				}
			});

			return result;
		},
		[t],
	);

	return (
		<div className="ui-container space-y-14">
			<h2 className="ui-typo-h2 text-tulViolet">{title}</h2>
			{projects.map((project, index) => (
				<InfoTile
					as="h3"
					data={mapProject(project)}
					disableListStyle
					index={index + 1}
					key={project.name}
					showEuLogo={project.withEULogo}
					title={project.name}
				/>
			))}
		</div>
	);
};
