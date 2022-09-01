import { InfoTile } from "@shared/components/info-tile/info-tile";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

interface InfoTileProps {
	data: string[];
	title: string;
}

export const MainFocusSection: FC = () => {
	const { t } = useTranslation("homepage");
	return (
		<div className="ui-container space-y-14">
			<h3 className="ui-typo-h3 text-tulViolet">{t("mainFocusSection.title")}</h3>
			{(t("mainFocusSection.data", { returnObjects: true }) as InfoTileProps[]).map((data, index) => (
				<InfoTile index={index + 1} key={data.title} {...data} />
			))}
		</div>
	);
};
