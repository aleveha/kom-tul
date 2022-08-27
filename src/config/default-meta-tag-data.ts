interface MetaDataType {
	metaTitle: string;
	metaDescription: string;
	image: string;
	keywords: string;
	siteName: string;
	type: string;
	imageWidth: number;
	imageHeight: number;
}

export const defaultMetaTagData: MetaDataType = {
	metaTitle: "helmet.title",
	metaDescription: "helmet.description",
	image: "/og-images/{locale}/default.jpg",
	keywords: "",
	siteName: "KOM TUL",
	type: "website",
	imageWidth: 1200,
	imageHeight: 630,
};
