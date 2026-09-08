import { softwareEngineerPortfolio } from "@/data/portfolios/software-engineer";
import { renderPortfolioOgImage, ogSize, ogContentType } from "@/og/og-image";

export const runtime = "nodejs";

export const alt = `${softwareEngineerPortfolio.profile.firstName} ${softwareEngineerPortfolio.profile.lastName} — ${softwareEngineerPortfolio.profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

/**
 * Open Graph image for each portfolio route (e.g. /software-engineer/opengraph-image),
 * generated from the same data that powers the Hero section.
 */
export default async function Image() {
  return renderPortfolioOgImage(softwareEngineerPortfolio);
}
