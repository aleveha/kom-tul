import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC } from "react";

export const HeroSection: FC = () => {
	const { t } = useTranslation("homepage");
	const { locale } = useRouter();

	return (
		<div className="ui-container">
			<h1
				className={clsx(
					"ui-typo-hero mb-5 w-1/2 text-tulViolet",
					locale == "en" && "sm:ui-typo-hero text-[1.8rem]",
				)}
			>
				{t("heroSection.title")}
			</h1>
			<h2 className="ui-typo-h1">{t("heroSection.subtitle")}</h2>
		</div>
	);
};
