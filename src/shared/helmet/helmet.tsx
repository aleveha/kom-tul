import { memo } from "react";
import { Favicon } from "./favicon";
import { MetaTagData, MetaTagDataProps } from "./meta-tag-data";
import { Prefetch } from "./prefetch";

interface Props {
	canonicalUrl?: string;
	metaTagData?: Partial<Omit<MetaTagDataProps, "canonicalUrl" | "replaceFullTitle" | "title">>;
	title: string;
}

export const Helmet = memo<Props>(({ canonicalUrl, metaTagData, title }) => {
	return (
		<>
			<Prefetch />
			<MetaTagData canonicalUrl={canonicalUrl} title={title} {...metaTagData} />
			<Favicon />
		</>
	);
});

Helmet.displayName = "Helmet";
