import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Document Management App — canonical wording (software-engineer / fullstack). */
export const documentManagement: Project = {
  include: true,
  includeInResume: true,
  title: "Document Management App",
  description:
    "A desktop app for managing and summarizing Swedish work-environment documents.",
  highlights: [
    "Streamlined dense, scattered Swedish work-environment documents into a single desktop app for searching, summarizing, and exporting.",
    "Built the tool in TypeScript/React/Electron, pulling data from the Swedish Work Environment Authority and Allabolag and summarizing PDFs with OpenAI.",
    "Engineered search with sqlite FTS5, data handling with Kysely, UI with Mantine, and schema validation with zod — backed by Vitest and a CircleCI pipeline.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["React"],
    allSkills["Electron"],
    allSkills["SQLite"],
    allSkills["Kysely"],
    allSkills["OpenAI"],
    allSkills["Vitest"],
    allSkills["React Query"],
    allSkills["CircleCI"],
  ],
  year: "2024 — 2025",
  featured: true,
  liveUrl: null,
  repoUrl: null,
  proof: ["PDF summarization with OpenAI", "Electron desktop app"],
};

/** Backend wording — focuses on data layer; not featured. */
export const documentManagementBackend: Project = {
  ...documentManagement,
  tech: [
    allSkills["TypeScript"],
    allSkills["SQLite"],
    allSkills["Kysely"],
    allSkills["OpenAI"],
    allSkills["Vitest"],
    allSkills["Electron"],
    allSkills["CircleCI"],
  ],
  featured: false,
  proof: ["PDF summarization with OpenAI", "SQLite FTS5 search"],
};

/** Tester / QA wording — emphasizes Vitest coverage and CI. */
export const documentManagementTesterQa: Project = {
  ...documentManagement,
  highlights: [
    "Built a TypeScript/React/Electron desktop app for searching, summarizing, and exporting Swedish work-environment documents.",
    "Guarded PDF parsing and OpenAI summarization with Vitest coverage so regressions are caught early.",
    "Automated quality checks through a CircleCI pipeline.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["React"],
    allSkills["Electron"],
    allSkills["Vitest"],
    allSkills["CircleCI"],
    allSkills["Kysely"],
    allSkills["SQLite"],
  ],
  proof: ["Vitest coverage", "CircleCI pipeline"],
};
