import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Self-hosted services — canonical wording (backend). */
export const selfHosted: Project = {
  include: true,
  includeInResume: true,
  title: "Self-Hosted Services",
  description:
    "A self-hosted home server serving Seafile and Forgejo.",
  highlights: [
    "Set up private, self-controlled file sharing and git hosting on a self-hosted home server.",
    "Containerized services with Docker Compose and routed traffic through Nginx as a TCP proxy.",
    "Operated the stack on Linux and diagnosed traffic with Wireshark.",
  ],
  tech: [
    allSkills["Docker"],
    allSkills["Linux"],
    allSkills["Nginx"],
    allSkills["Wireshark"],
  ],
  year: "2024 — 2025",
  featured: false,
  liveUrl: null,
  repoUrl: null,
  proof: ["Seafile + Forgejo self-hosted", "Docker Compose + Nginx"],
};

/** DevOps variant — adds Raspberry Pi and is featured. */
export const selfHostedDevops: Project = {
  ...selfHosted,
  tech: [
    allSkills["Docker"],
    allSkills["Linux"],
    allSkills["Nginx"],
    allSkills["Wireshark"],
    allSkills["Raspberry Pi"],
  ],
  featured: true,
};
