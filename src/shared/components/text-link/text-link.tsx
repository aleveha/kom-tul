import clsx from "clsx";
import React, { AnchorHTMLAttributes, forwardRef } from "react";

type Variant = "light" | "dark";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
	variant?: Variant;
}

export const TextLink = forwardRef<HTMLAnchorElement, Props>(
	({ children, className, disabled, variant = "light", ...restAnchorProps }, ref) => (
		<a
			className={clsx(
				"font-tul-mono no-underline",
				!disabled && "hover:cursor-pointer",
				variant === "light"
					? "text-tulViolet hover:text-tulVioletDark"
					: "text-tulVioletDark hover:text-tulViolet",
				className,
			)}
			ref={ref}
			{...restAnchorProps}
		>
			{children}
		</a>
	),
);

TextLink.displayName = "TextLink";
