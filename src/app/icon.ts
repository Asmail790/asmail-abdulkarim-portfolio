import { renderLogoMark, iconSize, iconContentType } from "@/og/logo-mark";
import { softwareEngineerPortfolio } from "@/data/portfolios/software-engineer";

export const size = iconSize;
export const contentType = iconContentType;

/**
 * Browser favicon matching the navbar logo — a rounded blue→sky→amber
 * gradient square with the profile initials in bold white. Served via the
 * `icon` file convention (adds `<link rel="icon">` automatically).
 */
export default async function Icon() {
  const { profile } = softwareEngineerPortfolio;
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  return renderLogoMark(initials);
}
