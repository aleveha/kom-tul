import { TextLink } from "@shared/components/text-link/text-link";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

interface PhDStudent {
	email: string;
	name: string;
}

export const PhDStudentsSection: FC = () => {
	const { t } = useTranslation("employees");

	return (
		<div className="ui-container space-y-12 md:space-y-20">
			<h2 className="ui-typo-h1 text-tulViolet">{t("PhD.title")}</h2>
			<div className="space-y-12 lg:flex lg:w-full lg:justify-between lg:space-y-0">
				{(t("PhD.students", { returnObjects: true }) as PhDStudent[]).map(({ email, name }) => (
					<div className="ui-typo-small1 space-y-3 md:space-y-2" key={email}>
						<h3 className="ui-typo-large">{name}</h3>
						<p>
							{t("labels.email")}:{" "}
							<TextLink className="whitespace-nowrap" href={`mailto:${email}`} variant="dark">
								{email}
							</TextLink>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
