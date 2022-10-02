import { FieldOfStudyInfo } from "@shared/pages/education/field-of-study";
import { FieldOfStudy } from "@shared/pages/education/types";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const MasterDegreeSection: FC = () => {
	const { t } = useTranslation("education");

	return (
		<div className="ui-container space-y-10">
			<h2 className="ui-typo-h2 text-tulViolet">{t("masterDegree.title")}</h2>
			<div className="ui-typo-small1 space-y-5">
				<p>
					{t("labels.formOfStudy")}: {t("masterDegree.formOfStudy")}
				</p>
				<p>
					{t("labels.studyPeriod")}: {t("masterDegree.studyPeriod")}
				</p>
				<p>
					{t("labels.academicDegree")}: {t("masterDegree.academicDegree")}
				</p>
			</div>
			<div className="space-y-10">
				{(t("masterDegree.fieldsOfStudy", { returnObjects: true }) as FieldOfStudy[]).map(fieldOfStudy => (
					<FieldOfStudyInfo fieldOfStudy={fieldOfStudy} key={fieldOfStudy.code} />
				))}
			</div>
		</div>
	);
};
