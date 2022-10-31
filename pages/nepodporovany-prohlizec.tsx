import { Page } from "@pages/unsupported-browser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TranslationProps } from "../types";

export const getStaticProps = async ({ locale }: TranslationProps) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "unsupportedBrowser"])),
	},
});

export default Page;
