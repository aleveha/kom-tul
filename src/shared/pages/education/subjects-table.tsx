import { Subject } from "@shared/pages/education/types";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

interface Props {
	subjects: Subject[];
}

export const SubjectsTable: FC<Props> = ({ subjects }) => {
	const { t } = useTranslation("education");

	return (
		<div>
			<div className="relative overflow-auto rounded-xl shadow">
				<table className="relative min-w-full">
					<thead className="ui-typo-small1 bg-tulViolet text-white">
						<tr>
							<th scope="col" className="py-3 pl-4 pr-3 text-left font-normal sm:pl-6">
								{t("labels.table.name")}
							</th>
							<th scope="col" className="px-3 py-3.5 text-left font-normal">
								{t("labels.table.shortName")}
							</th>
							<th scope="col" className="px-3 py-3.5 text-left font-normal">
								{t("labels.table.semester")}
							</th>
							<th scope="col" className="px-3 py-3.5 text-left font-normal">
								{t("labels.table.range")}
							</th>
							<th scope="col" className="px-3 py-3.5 text-left font-normal">
								{t("labels.table.exam")}
							</th>
							<th scope="col" className="px-3 py-3.5 text-left font-normal">
								{t("labels.table.credits")}
							</th>
							<th scope="col" className="px-3 py-3.5 text-left font-normal">
								{t("labels.table.teacher")}
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-tulVioletDark divide-opacity-10 text-small1">
						{subjects.map(({ credits, exam, name, range, required, semester, shortName, teacher }) => (
							<tr className={clsx(!required && "bg-tulVioletDark bg-opacity-5")} key={name}>
								<td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">{name}</td>
								<td className="whitespace-nowrap px-3 py-4">{shortName}</td>
								<td className="whitespace-nowrap px-3 py-4">{semester}</td>
								<td className="whitespace-nowrap px-3 py-4">{range}</td>
								<td className="whitespace-nowrap px-3 py-4">{exam}</td>
								<td className="whitespace-nowrap px-3 py-4">{credits}</td>
								<td className="whitespace-nowrap px-3 py-4">{teacher}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-3 flex flex-col md:flex-row md:space-x-6">
				{subjects.some(({ required }) => required) && (
					<div className="flex items-center">
						<div className="mr-3 h-5 w-5 rounded-md border border-tulVioletDark border-opacity-30" />
						<p className="text-small1">{t("labels.table.requiredSubject")}</p>
					</div>
				)}
				{subjects.some(({ required }) => !required) && (
					<div className="flex items-center">
						<div className="mr-3 h-5 w-5 rounded-md border border-tulVioletDark border-opacity-20 bg-tulVioletDark bg-opacity-5" />
						<p className="text-small1">{t("labels.table.notRequiredSubject")}</p>
					</div>
				)}
			</div>
		</div>
	);
};
