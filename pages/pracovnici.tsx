import { Page } from "@pages/employees";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TranslationProps } from "../types";

export const getStaticProps = async ({ locale }: TranslationProps) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "employees"])),
	},
});

export default Page;
