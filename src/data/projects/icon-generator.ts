import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Icon Generator Website — canonical wording (software-engineer / fullstack). */
export const iconGenerator: Project = {
  include: true,
  includeInResume: true,
  title: "Icon Generator Website",
  description:
    "A website that generates icons with OpenAI's DALL-E.",
  highlights: [
    "Built a Next.js/TypeScript icon generator that produces custom icons via OpenAI DALL-E (2 and 3).",
    "Abstracted the generator behind a swappable interface and layered in Auth.js, shadcn/ui, Kysely ORM, Docker and SQLite.",
    "Verified the flow with Playwright and Vitest and shipped it on Vercel, previously Azure.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Next.js"],
    allSkills["React"],
    allSkills["OpenAI"],
    allSkills["SQLite"],
    allSkills["Kysely"],
    allSkills["Docker"],
    allSkills["Playwright"],
    allSkills["Vitest"],
    allSkills["Azure"],
  ],
  year: "2023 — 2024",
  featured: false,
  liveUrl: "https://icon-generator-asmail790s-projects.vercel.app/home",
  repoUrl: null,
  proof: ["DALL-E image generation", "Next.js on Vercel"],
};

/** Fullstack variant — featured. */
export const iconGeneratorFullstack: Project = {
  ...iconGenerator,
  featured: true,
};

/** Tester / QA wording — emphasizes E2E verification. */
export const iconGeneratorTesterQa: Project = {
  ...iconGenerator,
  highlights: [
    "Built a Next.js/TypeScript icon generator powered by OpenAI DALL-E (2 and 3), with Auth.js, shadcn/ui, Kysely ORM, Docker and SQLite.",
    "Verified the AI feature end to end with Playwright and Vitest so regressions surface before release.",
    "Shipped it to Vercel, previously Azure, with automated E2E coverage.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Next.js"],
    allSkills["React"],
    allSkills["OpenAI"],
    allSkills["Playwright"],
    allSkills["Vitest"],
    allSkills["Docker"],
    allSkills["Azure"],
  ],
  proof: ["Playwright + Vitest suites", "E2E tested"],
};

/** DevOps wording — emphasizes Dockerized hosting. */
export const iconGeneratorDevops: Project = {
  ...iconGenerator,
  highlights: [
    "Dockerized a Next.js/TypeScript icon generator and deployed it on Vercel, previously Azure.",
    "Ran the stack on Auth.js, Kysely ORM, and SQLite for a stable hosted platform.",
    "Enabled users to generate, save, and manage custom icons.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Next.js"],
    allSkills["Docker"],
    allSkills["Azure"],
    allSkills["Vercel"],
    allSkills["OpenAI"],
  ],
  featured: true,
  proof: ["Vercel + Azure hosting", "Dockerized app"],
};
