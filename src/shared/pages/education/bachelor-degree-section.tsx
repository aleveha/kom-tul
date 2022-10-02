import { FieldOfStudyInfo } from "@shared/pages/education/field-of-study";
import { FieldOfStudy } from "@shared/pages/education/types";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const BachelorDegreeSection: FC = () => {
	const { t } = useTranslation("education");

	return (
		<div className="ui-container">
			<h1 className="sr-only">{t("title")}</h1>
			<div className="space-y-10">
				<h2 className="ui-typo-h2 text-tulViolet">{t("bachelorDegree.title")}</h2>
				<div className="ui-typo-small1 space-y-5">
					<p>
						{t("labels.formOfStudy")}: {t("bachelorDegree.formOfStudy")}
					</p>
					<p>
						{t("labels.studyPeriod")}: {t("bachelorDegree.studyPeriod")}
					</p>
					<p>
						{t("labels.academicDegree")}: {t("bachelorDegree.academicDegree")}
					</p>
				</div>
				<div>
					{(t("bachelorDegree.fieldsOfStudy", { returnObjects: true }) as FieldOfStudy[]).map(
						fieldOfStudy => (
							<FieldOfStudyInfo fieldOfStudy={fieldOfStudy} key={fieldOfStudy.code} />
						),
					)}
				</div>
			</div>
		</div>
	);
};
