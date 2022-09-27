import { TextLink } from "@shared/components/text-link/text-link";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import knapImg from "public/images/employees/knap.jpg";
import knapekImg from "public/images/employees/knapek.jpg";
import React, { FC } from "react";

interface Assistant {
	email: string;
	image: StaticImageData;
	name: string;
	phone: string;
}

const Assistant: FC<Assistant> = ({ email, image, name, phone }) => {
	const { t } = useTranslation("employees");

	return (
		<div className="flex flex-col-reverse md:flex-row md:space-x-4">
			<div className="flex max-w-[15rem] md:max-w-[11rem]">
				<Image alt={name} className="rounded-3xl" src={image} />
			</div>
			<div className="mb-8 flex min-h-full flex-col justify-end space-y-8 md:mb-0">
				<div className="ui-typo-small1 space-y-3 md:space-y-2">
					<h3 className="ui-typo-large mb-8">{name}</h3>
					<p>
						{t("labels.email")}:{" "}
						<TextLink className="whitespace-nowrap" href={`mailto:${email}`} variant="dark">
							{email}
						</TextLink>
					</p>
					<p>
						{t("labels.phone")}:{" "}
						<TextLink className="whitespace-nowrap" href={`tel:${phone}`} variant="dark">
							{phone}
						</TextLink>
					</p>
				</div>
			</div>
		</div>
	);
};

export const AssistantsSection: FC = () => {
	const { t } = useTranslation("employees");
	const knap = t("assistants.knap", { returnObjects: true }) as Assistant;
	const knapek = t("assistants.knapek", { returnObjects: true }) as Assistant;

	return (
		<div className="ui-container space-y-12 md:space-y-20">
			<h2 className="ui-typo-h1 text-tulViolet">{t("assistants.title")}</h2>
			<div className="space-y-20">
				<Assistant {...knap} image={knapImg} />
				<Assistant {...knapek} image={knapekImg} />
			</div>
		</div>
	);
};
