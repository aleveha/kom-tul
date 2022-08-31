import { Footer } from "@shared/components/footer/footer";
import { Navbar } from "@shared/components/navbar/navbar";
import React, { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
	<div id="jump-top" className="ui-container relative flex h-screen w-full flex-col">
		<Navbar />
		<div className="mt-36 mb-14 flex-1-0 md:mt-44 md:mb-20 lg:mt-52">{children}</div>
		<Footer />
	</div>
);
