import { Page } from "@pages/laboratories/laboratory-of-engineerung-metrology";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TranslationProps } from "../../types";

export const getStaticProps = async ({ locale }: TranslationProps) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "laboratories"])),
	},
});

export default Page;
