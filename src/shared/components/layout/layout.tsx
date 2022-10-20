import { Footer } from "@shared/components/footer/footer";
import { Navbar } from "@shared/components/navbar/navbar";
import React, { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
	<div id="jump-top" className="relative flex h-screen w-full flex-col">
		<Navbar />
		<main className="mt-36 mb-14 flex-1-0 space-y-20 md:mt-44 md:mb-20 lg:mt-52 lg:space-y-32">{children}</main>
		<Footer />
	</div>
);
