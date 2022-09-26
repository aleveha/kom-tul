import { useTranslation } from "next-i18next";
import Image from "next/image";
import about from "public/images/cooperation/about.jpg";
import React, { FC } from "react";

export const AboutSection: FC = () => {
	const { t } = useTranslation("cooperation");

	return (
		<div className="ui-container space-y-16">
			<h1 className="ui-typo-h1 text-tulViolet">{t("title")}</h1>
			<div className="flex flex-col space-y-12 xl:flex-row xl:space-y-0 xl:space-x-12">
				<div className="space-y-12 xl:w-1/2">
					<p className="lg:text-large">{t("about.text1")}</p>
					<p className="lg:text-large">{t("about.text2")}</p>
				</div>
				<div className="md:max-w-[36rem] xl:w-1/2">
					<Image alt="" className="rounded-3xl" src={about} />
				</div>
			</div>
		</div>
	);
};
