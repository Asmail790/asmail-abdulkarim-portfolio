import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Switch Challenge Practice Site — canonical (software-engineer / fullstack wording). */
export const switchChallenge: Project = {
  include: true,
  includeInResume: true,
  title: "Switch Challenge Practice Site",
  description:
    "Creator and maintainer of switch-challenge-practice.org, an aptitude-test practice platform.",
  highlights: [
    "Built and maintain switch-challenge-practice.org, a full-stack TypeScript/Svelte platform for practising aptitude tests, backed by a Cloudflare D1 database.",
    "Integrated betterAuth, oRPC, Drizzle, Storybook, Playwright, zod, tailwindcss, sqlite, vitest, svgdotjs and jsonld into one cohesive product.",
    "Grew the platform to 2000-3000 unique visitors each month.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Svelte"],
    allSkills["SvelteKit"],
    allSkills["Cloudflare D1"],
    allSkills["Drizzle ORM"],
    allSkills["Playwright"],
    allSkills["Vitest"],
    allSkills["Storybook"],
    allSkills["Tailwind CSS"],
  ],
  year: "2024 — Present",
  featured: true,
  liveUrl: "https://switch-challenge-pratice.org/",
  repoUrl: null,
  proof: ["2000-3000 monthly visitors", "Fullstack TypeScript/Svelte app"],
};

/** Tester / QA wording — emphasizes component and workflow verification. */
export const switchChallengeTesterQa: Project = {
  ...switchChallenge,
  highlights: [
    "Built and maintain switch-challenge-practice.org, a full-stack TypeScript/Svelte platform for practising aptitude tests, backed by a Cloudflare D1 database.",
    "Verified components and user workflows with Storybook, Playwright, and Vitest to keep the platform reliable.",
    "Grew the platform to 2000-3000 unique visitors each month.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Svelte"],
    allSkills["SvelteKit"],
    allSkills["Playwright"],
    allSkills["Vitest"],
    allSkills["Storybook"],
    allSkills["Docker"],
  ],
  proof: ["Playwright + Storybook tested", "2000-3000 monthly visitors"],
};

/** DevOps wording — emphasizes Cloudflare Workers edge deployment. */
export const switchChallengeDevops: Project = {
  ...switchChallenge,
  highlights: [
    "Deployed a full-stack TypeScript/Svelte practice platform serverless on Cloudflare Workers with a Cloudflare D1 database.",
    "Managed environment variables and secure DB credentials for the Cloudflare environment.",
    "Scaled the site to 2000-3000 unique visitors each month with low-latency edge hosting.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Svelte"],
    allSkills["Cloudflare"],
    allSkills["Cloudflare D1"],
    allSkills["Drizzle ORM"],
    allSkills["Vitest"],
    allSkills["Playwright"],
  ],
  proof: ["Cloudflare Workers deployment", "2000-3000 monthly visitors"],
};
