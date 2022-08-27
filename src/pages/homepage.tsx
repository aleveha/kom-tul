import { Helmet } from "@shared/helmet/helmet";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const Page: FC = () => {
	const { t } = useTranslation("common");
	const text = t("helmet.title");
	return (
		<>
			<Helmet title={t("helmet.title")} />
			<div>
				<h1 className="ui-typo-hero">{text}</h1>
				<h1 className="ui-typo-h1">{text}</h1>
				<h2 className="ui-typo-h2">{text}</h2>
				<h3 className="ui-typo-h3">{text}</h3>
				<p className="ui-typo-large">{text}</p>
				<p className="ui-typo-body">{text}</p>
				<p className="ui-typo-small">{text}</p>
			</div>
		</>
	);
};
