import { TextLink } from "@shared/components/text-link/text-link";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const RectorsDirective: FC = () => {
	const { t } = useTranslation("education");

	return (
		<div>
			<TextLink
				className="ui-typo-small1 !underline"
				href="/static/files/5-2018-jednotna-uprava-a-zverejnovani-bakalarskych-diplomovych-disertacnich-rigoroznich-a-habilitacnich-praci.pdf"
				target="_blank"
			>
				{t("shared.rectorsDirective")}
			</TextLink>
		</div>
	);
};
