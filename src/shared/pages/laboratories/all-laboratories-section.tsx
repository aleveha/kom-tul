import { Button } from "@shared/components/button/button";
import { TextLink } from "@shared/components/text-link/text-link";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import labOfChipTechnologiesImg from "public/images/laboratories/lab-of-chip-technologies.jpg";
import labOfEngineeringMetrologyImg from "public/images/laboratories/lab-of-engineering-metrology.jpg";
import React, { FC } from "react";

interface ILaboratoryPreview {
	description: string;
	image: StaticImageData;
	link: string;
	name: string;
}

const LaboratoryPreview: FC<ILaboratoryPreview> = ({ description, image, link, name }) => {
	const { t } = useTranslation("laboratories");

	return (
		<div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
			<div className="relative flex lg:w-1/2 lg:max-w-[37.5rem]">
				<Image alt={name} className="rounded-3xl" src={image} />
				<TextLink
					className="hidden lg:absolute lg:inset-0 lg:flex lg:transform lg:items-center lg:justify-center lg:rounded-3xl lg:font-tul-mono lg:text-h3 lg:text-opacity-0 lg:underline lg:duration-300 hover:lg:bg-tulVioletDark hover:lg:bg-opacity-90 hover:lg:text-white hover:lg:text-opacity-100"
					href={link}
				>
					{t("labs.preview.moreButton")}
				</TextLink>
			</div>
			<div className="flex min-h-full flex-col justify-end space-y-6 md:space-y-10 lg:w-1/2">
				<h2 className="ui-typo-h3 lg:w-5/6">
					<TextLink href={link}>{name}</TextLink>
				</h2>
				<p className="text-large opacity-70">{description}</p>
			</div>
			<div className="flex w-full justify-end lg:hidden">
				<Button href={link}>{t("labs.preview.moreButton")}</Button>
			</div>
		</div>
	);
};

export const AllLaboratoriesSection: FC = () => {
	const { t } = useTranslation("laboratories");
	const { locale } = useRouter();

	const labOfChipTechnologies = t("labs.chipTechnologies.preview", { returnObjects: true }) as ILaboratoryPreview;
	const labOfEngineeringMetrology = t("labs.engineeringMetrology.preview", {
		returnObjects: true,
	}) as ILaboratoryPreview;

	return (
		<div className="ui-container space-y-20">
			<h1 className="ui-typo-h1 text-tulViolet">{t("title")}</h1>
			<LaboratoryPreview
				{...labOfChipTechnologies}
				image={labOfChipTechnologiesImg}
				link={
					locale === "en"
						? "/en/laboratories/laboratory-of-chip-technologies"
						: "/laboratore/laborator-triskovych-technologii-a-procesu"
				}
			/>
			<LaboratoryPreview
				{...labOfEngineeringMetrology}
				image={labOfEngineeringMetrologyImg}
				link={
					locale === "en"
						? "/en/laboratories/laboratory-of-engineering-metrology"
						: "/laboratore/laborator-strojirenske-metrologie"
				}
			/>
		</div>
	);
};
