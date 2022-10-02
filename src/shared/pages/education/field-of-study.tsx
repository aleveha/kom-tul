import { SubjectsTable } from "@shared/pages/education/subjects-table";
import { FieldOfStudy } from "@shared/pages/education/types";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

interface Props {
	fieldOfStudy: FieldOfStudy;
}

export const FieldOfStudyInfo: FC<Props> = ({ fieldOfStudy: { code, name, years } }) => {
	const { t } = useTranslation("education");

	return (
		<div className="space-y-5">
			<h3 className="font-tul-mono font-bold">
				<span className="text-tulViolet">{name}</span> <span>({code})</span>
			</h3>
			{years && (
				<div className="space-y-10">
					{years.map(({ number, subjects }) => (
						<div className="space-y-5" key={number}>
							<p className="ui-typo-small1">
								0{number}.&nbsp;{t("labels.year")}
							</p>
							<SubjectsTable subjects={subjects} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};
