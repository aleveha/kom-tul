import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const AddressSection: FC = () => {
	const { t } = useTranslation("cooperation");

	return (
		<div className="ui-container space-y-14">
			<h2 className="ui-typo-h3 text-tulViolet">{t("address.title")}</h2>
			<div className="space-y-2 font-tul-mono">
				<p>{t("address.universityName")}</p>
				<p>{t("address.departmentName")}</p>
				<p>{t("address.departmentAddress")}</p>
			</div>
		</div>
	);
};
