import { TextLink } from "@shared/components/text-link/text-link";
import { FieldOfStudyInfo } from "@shared/pages/education/field-of-study";
import { RectorsDirective } from "@shared/pages/education/rectors-directive";
import { FieldOfStudy } from "@shared/pages/education/types";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const DoctorDegreeSection: FC = () => {
	const { t } = useTranslation("education");

	return (
		<div className="ui-container space-y-10">
			<h2 className="ui-typo-h2 text-tulViolet">{t("doctorDegree.title")}</h2>
			<div className="ui-typo-small1 space-y-5">
				<p>
					{t("labels.formOfStudy")}: {t("doctorDegree.formOfStudy")}
				</p>
				<p>
					{t("labels.studyPeriod")}: {t("doctorDegree.studyPeriod")}
				</p>
				<p>
					{t("labels.academicDegree")}: {t("doctorDegree.academicDegree")}
				</p>
			</div>
			<div className="space-y-10">
				{(t("doctorDegree.fieldsOfStudy", { returnObjects: true }) as FieldOfStudy[]).map(fieldOfStudy => (
					<FieldOfStudyInfo fieldOfStudy={fieldOfStudy} key={fieldOfStudy.code} />
				))}
			</div>
			<div>
				<TextLink className="ui-typo-small1 !underline" href="https://www.fs.tul.cz/studijni-programy-dsp">
					{t("doctorDegree.link")}
				</TextLink>
			</div>
			<RectorsDirective />
		</div>
	);
};
