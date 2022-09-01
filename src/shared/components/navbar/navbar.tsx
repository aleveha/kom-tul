import { navbarConfig } from "@config/navbar-config";
import { Disclosure } from "@headlessui/react";
import { LangButtons } from "@shared/components/navbar/lang-buttons";
import { TextLink } from "@shared/components/text-link/text-link";
import { Logo } from "@shared/ui/logo/logo";
import clsx from "clsx";
import jump from "jump.js";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { forwardRef, memo, useCallback } from "react";

interface HeaderLogoProps {
	href?: string;
	onClick?: () => void;
	role?: string;
}

const HeaderLogo = forwardRef<HTMLAnchorElement, HeaderLogoProps>((props, ref) => {
	return (
		<a ref={ref} {...props}>
			<span className="sr-only">KOM TUL</span>
			<Logo />
		</a>
	);
});

HeaderLogo.displayName = "HeaderLogo";

interface HeaderItemProps extends HeaderLogoProps {
	pathname: string;
	route: string;
	title: string;
}

const HeaderItem = forwardRef<HTMLAnchorElement, HeaderItemProps>(({ pathname, route, title, ...rest }, ref) => {
	return (
		<TextLink className={clsx(pathname === route && "font-bold")} ref={ref} {...rest}>
			{title}
		</TextLink>
	);
});

HeaderItem.displayName = "HeaderItem";

export const Navbar = memo(() => {
	const { t } = useTranslation("common");
	const { locale, pathname } = useRouter();

	const jumpToTop = useCallback(() => jump("#jump-top"), []);

	const genericHamburgerLine = "h-1 w-8 rounded-full bg-tulViolet transition ease-in-out transform duration-300";

	const navbarItems = navbarConfig.map(({ name, route }) =>
		pathname === t(route) ? (
			<HeaderItem key={t(name)} onClick={jumpToTop} pathname={pathname} route={t(route)} title={t(name)} />
		) : (
			<Link href={t(route)} key={name} passHref>
				<HeaderItem key={t(name)} pathname={pathname} route={t(route)} title={t(name)} />
			</Link>
		),
	);

	return (
		<nav className="ui-container fixed left-0 right-0 top-5 z-50 md:top-10">
			<Disclosure>
				{({ open, close }) => (
					<>
						<div
							className={clsx(
								"flex h-20 w-full items-center justify-between overflow-x-hidden bg-white px-8 shadow-md md:px-12",
								open ? "rounded-t-[2.5rem]" : "rounded-full",
							)}
						>
							{pathname === "/" ? (
								<HeaderLogo onClick={jumpToTop} role="button" />
							) : (
								<Link href="/" passHref>
									<HeaderLogo onClick={close} />
								</Link>
							)}
							<div className="ui-typo-small1 hidden space-x-4 lg:block lg:space-x-4 xl:space-x-8">
								{navbarItems}
							</div>
							<LangButtons locale={locale} pathname={pathname} />
							<Disclosure.Button className="flex h-12 w-12 flex-col items-center justify-center space-y-1 lg:hidden">
								<div className={clsx(genericHamburgerLine, open && "translate-y-2 rotate-45")} />
								<div className={clsx(genericHamburgerLine, open && "opacity-0")} />
								<div className={clsx(genericHamburgerLine, open && "-translate-y-2 -rotate-45")} />
							</Disclosure.Button>
						</div>
						<Disclosure.Panel className="lg:hidden">
							<div className="flex flex-col space-y-4 rounded-b-[3rem] bg-white bg-white px-8 pt-4 pb-6 shadow-md md:px-12">
								{navbarItems}
								<LangButtons isMobile locale={locale} pathname={pathname} />
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</nav>
	);
});

Navbar.displayName = "Navbar";
