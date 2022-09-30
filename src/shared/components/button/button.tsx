import clsx from "clsx";
import Link from "next/link";
import React, { AnchorHTMLAttributes, forwardRef, memo, ReactNode } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactNode;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({ children, className, href, ...rest }, ref) => (
	<a
		className={clsx(
			"flex w-fit transform rounded-full bg-tulViolet px-8 py-5 duration-500",
			href && "hover:cursor-pointer hover:bg-tulVioletDark",
			className,
		)}
		href={href}
		ref={ref}
		{...rest}
	>
		<span className="ui-typo-small2 sm:ui-typo-small1 text-center font-tul-mono text-white">{children}</span>
	</a>
));

LinkButton.displayName = "LinkButton";

export const Button = memo<LinkButtonProps>(({ href, ...rest }) =>
	href?.startsWith("/") ? (
		<Link href={href} passHref>
			<LinkButton {...rest} />
		</Link>
	) : (
		<LinkButton href={href} {...rest} />
	),
);

Button.displayName = "LinkButton";
