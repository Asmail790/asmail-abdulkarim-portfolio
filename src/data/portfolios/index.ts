import { PortfolioData } from "@/data/types";
import { softwareEngineerPortfolio } from "@/data/portfolios/software-engineer";
import { fullstackPortfolio } from "@/data/portfolios/fullstack";
import { backendPortfolio } from "@/data/portfolios/backend";
import { testerQaPortfolio } from "@/data/portfolios/tester-qa";
import { devopsPortfolio } from "@/data/portfolios/devops";
import { dataScientistPortfolio } from "@/data/portfolios/data-scientist";

export const allPortfolios: Record<string, PortfolioData> = {
  "main":softwareEngineerPortfolio,
  "software-engineer": softwareEngineerPortfolio,
  fullstack: fullstackPortfolio,
  backend: backendPortfolio,
  "tester-qa": testerQaPortfolio,
  devops: devopsPortfolio,
  "data-scientist": dataScientistPortfolio,
};
