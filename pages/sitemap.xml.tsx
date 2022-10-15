import { generateSitemap } from "@shared/utils/generate_sitemap";
import { GetServerSideProps, NextPage } from "next";

const Sitemap: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	res.setHeader("Content-Type", "text/xml");
	res.write(generateSitemap());
	res.end();

	return { props: {} };
};

export default Sitemap;
