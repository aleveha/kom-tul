import { InfoTile } from "@shared/components/info-tile/info-tile";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

interface CooperationPhase {
	description: string;
	name: string;
}

export const HowToCooperateSection: FC = () => {
	const { t } = useTranslation("cooperation");

	return (
		<div className="ui-container space-y-14">
			<h2 className="ui-typo-h3 text-tulViolet">{t("howToCooperate.title")}</h2>
			{(t("howToCooperate.phases", { returnObjects: true }) as CooperationPhase[]).map((phase, index) => (
				<InfoTile
					as="h3"
					data={[phase.description]}
					disableListStyle
					index={index + 1}
					key={phase.name}
					title={phase.name}
				/>
			))}
		</div>
	);
};
