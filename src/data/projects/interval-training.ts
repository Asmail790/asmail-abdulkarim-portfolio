import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Interval Training App — Android interval training with customization. */
export const intervalTraining: Project = {
  include: true,
  includeInResume: true,
  title: "Interval Training App",
  description:
    "A customizable interval-training app for Android.",
  highlights: [
    "Designed an Android interval-training app in Kotlin with a Jetpack Compose UI built around per-user customization.",
    "Implemented the business logic and a background media-playback service so sessions keep running reliably.",
  ],
  tech: [allSkills["Kotlin"], allSkills["Android"], allSkills["Jetpack Compose"]],
  year: "2026 — Present",
  featured: false,
  liveUrl: null,
  repoUrl: null,
  proof: [],
};
