import { TextLink } from "@shared/components/text-link/text-link";
import clsx from "clsx";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
	lang: string;
	locale?: string;
	pathname: string;
}

export const LangButton: FC<Props> = ({ children, lang, locale, pathname }) => {
	const sameLang = locale === lang;
	return (
		<Link href={pathname} locale={lang} passHref>
			<TextLink
				className={clsx(sameLang && "border-b-2 border-tulViolet font-bold hover:cursor-default")}
				disabled={sameLang}
				href={pathname}
			>
				{children}
			</TextLink>
		</Link>
	);
};
