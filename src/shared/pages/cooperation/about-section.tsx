import { useTranslation } from "next-i18next";
import Image from "next/image";
import about from "public/images/cooperation/about.jpg";
import React, { FC } from "react";

export const AboutSection: FC = () => {
	const { t } = useTranslation("cooperation");

	return (
		<div className="bg-tulViolet pt-20 pb-10 lg:pb-20">
			<div className="ui-container space-y-16">
				<h1 className="ui-typo-h1 text-white">{t("title")}</h1>
				<div className="flex flex-col space-y-12 lg:flex-row lg:space-y-0 lg:space-x-12">
					<div className="space-y-12 tracking-wider text-white sm:text-justify lg:w-1/2">
						<p>{t("about.text1")}</p>
						<p>{t("about.text2")}</p>
					</div>
					<div className="flex h-full overflow-hidden rounded-3xl border-2 border-white lg:w-1/2">
						<Image alt="" src={about} />
					</div>
				</div>
			</div>
		</div>
	);
};
