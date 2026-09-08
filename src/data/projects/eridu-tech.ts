import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/**
 * eridu-tech / @daiso-tech/core — open-source backend foundation toolkit.
 * Canonical variant (software-engineer / fullstack / backend wording).
 */
export const eriduTech: Project = {
  include: true,
  includeInResume: true,
  title: "eridu-tech (@daiso-tech/core)",
  description:
    "Co-founder of eridu-tech, an open-source backend foundation toolkit for TypeScript.",
  highlights: [
    "Co-founded eridu-tech, an open-source backend foundation toolkit for TypeScript, to stop teams re-building the same backend capabilities for every project.",
    "Implemented a dependency-injection framework from scratch and validated the dependency graph, covering it with comprehensive unit tests.",
    "Delivered a reusable, tested DI component that now anchors the toolkit's backend foundation.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Node.js"],
    allSkills["Unit Tests"],
    allSkills["Integration Tests"],
    allSkills["Adapter Pattern"],
    allSkills["Event Bus"],
    allSkills["Clean Architecture"],
  ],
  year: "2024 — Ongoing",
  featured: true,
  liveUrl: "https://www.eridu-tech.io/",
  repoUrl: null,
  proof: ["Open-source backend toolkit", "DI framework from scratch"],
};

/** eridu-tech with the extra "Comprehensive unit tests" proof used on the Software Engineer page. */
export const eriduTechSoftwareEngineer: Project = {
  ...eriduTech,
  proof: [
    "Open-source backend toolkit",
    "DI framework from scratch",
    "Comprehensive unit tests",
  ],
};

/** Tester / QA wording — emphasizes implementing and testing the DI component. */
export const eriduTechTesterQa: Project = {
  ...eriduTech,
  highlights: [
    "Co-founded @daiso-tech/core, an open-source backend foundation toolkit for TypeScript.",
    "Implemented and tested the dependency-injection component, focusing on validating the dependency graph to catch broken wiring early.",
    "Backed the DI component with comprehensive unit tests.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Node.js"],
    allSkills["Unit Tests"],
    allSkills["Integration Tests"],
    allSkills["Test Automation"],
  ],
  proof: ["Dependency-graph validation", "Comprehensive unit tests"],
};

/** DevOps wording — emphasizes CI/CD automation. */
export const eriduTechDevops: Project = {
  ...eriduTech,
  highlights: [
    "Co-founded eridu-tech, an open-source backend foundation toolkit for TypeScript.",
    "Implemented a dependency-injection framework from scratch and validated its dependency graph with unit tests.",
    "Automated CI/CD with CircleCI and GitHub Actions-style pipelines so releases stay green and repeatable.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Node.js"],
    allSkills["CircleCI"],
    allSkills["GitHub Actions"],
    allSkills["Docker"],
    allSkills["Unit Tests"],
    allSkills["Integration Tests"],
  ],
  proof: ["CI/CD pipelines", "Open-source backend toolkit"],
};
