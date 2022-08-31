import clsx from "clsx";
import React, { AnchorHTMLAttributes, forwardRef } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
}

export const TextLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
	const { children, className, disabled, ...restAnchorProps } = props;

	return (
		<a
			className={clsx(
				"font-tul-mono text-tulViolet no-underline",
				!disabled && "hover:cursor-pointer hover:text-tulVioletDark",
				className,
			)}
			ref={ref}
			{...restAnchorProps}
		>
			{children}
		</a>
	);
});

TextLink.displayName = "TextLink";
