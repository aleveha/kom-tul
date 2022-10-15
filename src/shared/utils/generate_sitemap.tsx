import { config } from "@config/config";

export type SitemapItem = {
	lastmod?: string | null;
	loc: string;
	priority: number;
};

const STATIC_ROUTES = [
	"",
	"en",
	"pracovnici",
	"en/employees",
	"projekty",
	"en/projects",
	"vyuka",
	"en/education",
	"laboratore",
	"en/laboratories",
	"spoluprace",
	"en/cooperation",
];

function prepareSitemapData(): SitemapItem[] {
	const urls: SitemapItem[] = [];

	STATIC_ROUTES.map(route => {
		urls.push({ loc: config.FRONTEND_URL + (route ? `/${route}` : ""), priority: 1.0 });
	});

	return urls;
}

export const generateSitemap = (): string => {
	const urls = prepareSitemapData();

	/* eslint-disable */
	return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            ${urls
				.map(
					({ loc, priority, lastmod }) => `<url>
                        <loc>${loc}</loc>
                            <priority>${priority}</priority>
                            ${lastmod ? `<lastmod>${lastmod}</lastmod>` : "<changefreq>monthly</changefreq>"}
                        </url>`,
				)
				.join("")}
        </urlset>`;
};
