import { Trans } from "next-i18next";
import React, { FC } from "react";

export const Footer: FC = () => (
	<footer className="flex items-center justify-center border-t border-gray100">
		<span className="ui-typo-small2 h-full py-5 text-center font-tul-mono text-gray500">
			<Trans i18nKey="footer.title" components={{ br: <br className="md:hidden" /> }} />
		</span>
	</footer>
);
