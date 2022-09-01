import { Page } from "@pages/homepage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TranslationProps } from "../types";

export const getStaticProps = async ({ locale }: TranslationProps) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "homepage"])),
	},
});

export default Page;
