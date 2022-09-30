import { TextLink } from "@shared/components/text-link/text-link";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface LangButtonProps extends LangButtonsProps {
	children: ReactNode;
	lang: string;
}

const LangButton: FC<LangButtonProps> = ({ children, lang, locale, pathname }) => {
	const sameLang = locale === lang;
	return (
		<TextLink
			className={clsx(sameLang && "border-b-2 border-tulViolet font-bold hover:cursor-default")}
			disabled={sameLang}
			locale={lang}
			href={pathname}
		>
			{children}
		</TextLink>
	);
};

interface LangButtonsProps {
	isMobile?: boolean;
	locale?: string;
	pathname: string;
}

export const LangButtons: FC<LangButtonsProps> = ({ isMobile, locale, pathname }) => {
	return (
		<div
			className={clsx("ui-typo-body space-x-2", isMobile ? "border-t border-y-gray100 pt-4" : "hidden lg:block")}
		>
			<LangButton lang="cs" locale={locale} pathname={pathname}>
				CZ
			</LangButton>
			<LangButton lang="en" locale={locale} pathname={pathname}>
				EN
			</LangButton>
		</div>
	);
};
