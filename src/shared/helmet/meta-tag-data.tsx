import { config } from "@config/config";
import { defaultMetaTagData } from "@config/default-meta-tag-data";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { memo } from "react";

export interface MetaTagDataProps {
	canonicalUrl?: string;
	image?: string;
	keywords?: string;
	metaDescription?: string;
	metaTitle?: string;
	title: string;
	type?: string;
}

export const MetaTagData = memo<MetaTagDataProps>(
	({
		canonicalUrl,
		image = defaultMetaTagData.image,
		keywords = defaultMetaTagData.keywords,
		metaDescription,
		title,
		metaTitle = title,
		type = defaultMetaTagData.type,
	}) => {
		const { locale, asPath } = useRouter();
		const { t } = useTranslation("common");

		return (
			<Head>
				<title>{`${title} | ${defaultMetaTagData.siteName}`}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
				<meta name="title" content={metaTitle ?? (t(defaultMetaTagData.metaTitle) as string)} />
				<meta
					name="description"
					content={metaDescription ?? (t(defaultMetaTagData.metaDescription) as string)}
				/>
				{keywords && <meta name="keywords" content={keywords} />}
				<meta name="robots" content="noindex, nofollow" />
				<meta property="og:title" content={metaTitle ?? (t(defaultMetaTagData.metaTitle) as string)} />
				<meta
					property="og:description"
					content={metaDescription ?? (t(defaultMetaTagData.metaDescription) as string)}
				/>
				{image && (
					<meta
						property="og:image"
						content={`${config.FRONTEND_URL}${image.replace("{locale}", locale ?? "cs")}`}
					/>
				)}
				<meta property="og:image:width" content={String(defaultMetaTagData.imageWidth)} />
				<meta property="og:image:height" content={String(defaultMetaTagData.imageHeight)} />
				<meta property="og:url" content={canonicalUrl ?? config.FRONTEND_URL + asPath} />
				<meta property="og:site_name" content={defaultMetaTagData.siteName} />
				<meta property="og:type" content={type} />
				{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
			</Head>
		);
	},
);

MetaTagData.displayName = "MetaTagData";
