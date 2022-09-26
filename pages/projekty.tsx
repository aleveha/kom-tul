import { Page } from "@pages/projects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TranslationProps } from "../types";

export const getStaticProps = async ({ locale }: TranslationProps) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "projects"])),
	},
});

export default Page;
