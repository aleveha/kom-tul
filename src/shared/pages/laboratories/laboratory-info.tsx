import { InfoTile } from "@shared/components/info-tile/info-tile";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

export interface LaboratoryBaseInfo {
	title: string;
	content: string[];
}

interface Props {
	equipment: (LaboratoryBaseInfo | string)[];
	focus: string[];
	image: StaticImageData;
	mainAim: string;
	services: LaboratoryBaseInfo[];
	title: string;
}

export const LaboratoryInfo: FC<Props> = ({ equipment, focus, image, mainAim, services, title }) => {
	const { t } = useTranslation("laboratories");

	return (
		<>
			<div className="space-y-10 lg:space-y-20">
				<h1 className="ui-container ui-typo-h1 text-tulViolet">{title}</h1>
				<div className="bg-tulViolet pt-20 pb-10 lg:pb-20">
					<div className="ui-container flex flex-col space-y-10 xl:flex-row xl:space-y-0 xl:space-x-6">
						<div className="space-y-6 xl:w-1/2">
							<h2 className="ui-typo-h3 text-white">{t("labs.titles.mainAim")}</h2>
							<p className="leading-relaxed tracking-wider text-white">{mainAim}</p>
						</div>
						<div className="flex overflow-hidden rounded-3xl border-2 border-white md:max-w-[36rem] xl:w-1/2">
							<Image alt={title} src={image} />
						</div>
					</div>
				</div>
			</div>
			<div className="ui-container space-y-20 lg:space-y-32">
				<div className="space-y-10">
					<h2 className="ui-typo-h3 text-tulViolet">{t("labs.titles.focus")}</h2>
					<ul className="ui-typo-body ml-4 list-disc space-y-2 opacity-70">
						{focus.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div className="space-y-10">
					<h2 className="ui-typo-h3 text-tulViolet">{t("labs.titles.equipment")}</h2>
					{typeof equipment[0] === "string" ? (
						<ul className="ui-typo-body list-inside list-disc space-y-2 opacity-70">
							{(equipment as string[]).map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					) : (
						<div className="space-y-10">
							{(equipment as LaboratoryBaseInfo[]).map(({ title, content }, index) => (
								<InfoTile as="h3" data={content} index={index + 1} key={title} title={title} />
							))}
						</div>
					)}
				</div>
				<div className="space-y-10">
					<h2 className="ui-typo-h3 text-tulViolet">{t("labs.titles.services")}</h2>
					<div className="space-y-10">
						{services.map(({ title, content }, index) => (
							<InfoTile as="h3" data={content} index={index + 1} key={title} title={title} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};
