import { allPortfolios } from "@/data/portfolios";
import { softwareEngineerPortfolio } from "@/data/portfolios/software-engineer";
import {
  renderPortfolioOgImage,
  ogAlt,
  ogSize,
  ogContentType,
} from "@/og/og-image";

export const alt = ogAlt(softwareEngineerPortfolio);
export const size = ogSize;
export const contentType = ogContentType;

/**
 * Open Graph image for each portfolio route (e.g. /software-engineer/opengraph-image),
 * generated from the same data that powers the Hero section.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ portfolio: string }>;
}) {
  const { portfolio } = await params;
  const data = allPortfolios[portfolio];
  if (!data) return new Response("Not found", { status: 404 });

  return renderPortfolioOgImage(data);
}
