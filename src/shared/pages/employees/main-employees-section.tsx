import { TextLink } from "@shared/components/text-link/text-link";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import dvorackovaImg from "public/images/employees/dvorackova.jpg";
import kusaImg from "public/images/employees/kusa.jpg";
import ledvinaImg from "public/images/employees/ledvina.jpg";
import vanaImg from "public/images/employees/vana.jpg";
import React, { FC } from "react";

interface MainEmployee {
	email: string;
	image: StaticImageData;
	name: string;
	phone: string;
	position: string;
	specialisation?: string;
}

const MainEmployee: FC<MainEmployee> = ({ email, image, name, phone, position, specialisation }) => {
	const { t } = useTranslation("employees");

	return (
		<div className="flex flex-col-reverse md:flex-row md:space-x-4">
			<div className="flex max-w-[15rem] md:max-w-[11rem]">
				<Image alt={name} className="rounded-3xl" src={image} />
			</div>
			<div className="mb-8 flex min-h-full flex-col justify-between space-y-8 md:mb-0">
				<div>
					<h2 className="ui-typo-h2 mb-4 text-tulViolet">{position}</h2>
					<h3 className="ui-typo-large">{name}</h3>
				</div>
				<div className="ui-typo-small1 space-y-3 md:space-y-2">
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
					{specialisation && (
						<p>
							{t("labels.specialisation")}: {specialisation}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export const MainEmployeesSection: FC = () => {
	const { t } = useTranslation("employees");
	const dvorackova = t("mainEmployees.dvorackova", { returnObjects: true }) as MainEmployee;
	const kusa = t("mainEmployees.kusa", { returnObjects: true }) as MainEmployee;
	const ledvina = t("mainEmployees.ledvina", { returnObjects: true }) as MainEmployee;
	const vana = t("mainEmployees.vana", { returnObjects: true }) as MainEmployee;

	return (
		<div className="ui-container space-y-12 md:space-y-20">
			<h1 className="ui-typo-h1 text-tulViolet">{t("title")}</h1>
			<div className="space-y-20">
				<MainEmployee {...dvorackova} image={dvorackovaImg} />
				<MainEmployee {...kusa} image={kusaImg} />
				<MainEmployee {...ledvina} image={ledvinaImg} />
				<MainEmployee {...vana} image={vanaImg} />
			</div>
		</div>
	);
};
