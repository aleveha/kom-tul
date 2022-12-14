import clsx from "clsx";
import Link from "next/link";
import React, { AnchorHTMLAttributes, forwardRef } from "react";

type Variant = "light" | "dark";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
	locale?: string;
	variant?: Variant;
}

const TextLinkComponent = forwardRef<HTMLAnchorElement, Props>(
	({ children, className, disabled, variant = "light", ...restAnchorProps }, ref) => (
		<a
			className={clsx(
				"font-tul-mono no-underline",
				!disabled &&
					"transform duration-300 hover:cursor-pointer" &&
					(variant === "light" ? "hover:text-tulVioletDark" : "hover:text-tulViolet"),
				variant === "light" ? "text-tulViolet" : "text-tulVioletDark",
				className,
			)}
			ref={ref}
			{...restAnchorProps}
		>
			{children}
		</a>
	),
);

TextLinkComponent.displayName = "TextLinkComponent";

export const TextLink = forwardRef<HTMLAnchorElement, Props>(({ href, locale, ...rest }, ref) =>
	href?.startsWith("/") ? (
		<Link href={href} locale={locale} passHref>
			<TextLinkComponent ref={ref} {...rest} />
		</Link>
	) : (
		<TextLinkComponent href={href} ref={ref} rel="noopener noreferrer" target="_blank" {...rest} />
	),
);

TextLink.displayName = "TextLink";
