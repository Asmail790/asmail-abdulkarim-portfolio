import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Surveillance System — canonical (software-engineer wording). */
export const surveillanceSystem: Project = {
  include: true,
  includeInResume: true,
  title: "Surveillance System",
  description:
    "A home surveillance system with door alerts and real-time face detection.",
  highlights: [
    "Engineered a home surveillance system on Raspberry Pi hardware that detects when the front door opens, pushes a notification, and starts live recording.",
    "Built the pipeline in Python, TypeScript, Kotlin, and C with Node.js, OpenCV, Linux, Nfty, Mediamtx, Android, and FFmpeg for real-time face detection.",
    "Enabled users to jump back in time or directly to detected-face timestamps in the Android app.",
  ],
  tech: [
    allSkills["Python"],
    allSkills["OpenCV"],
    allSkills["Raspberry Pi"],
    allSkills["FFmpeg"],
    allSkills["Linux"],
    allSkills["Android"],
    allSkills["Node.js"],
  ],
  year: "2025 — Ongoing",
  featured: false,
  liveUrl: null,
  repoUrl: null,
  proof: ["Real-time face detection", "Raspberry Pi based"],
};

/** DevOps wording — emphasizes Linux infrastructure across devices. */
export const surveillanceSystemDevops: Project = {
  ...surveillanceSystem,
  highlights: [
    "Engineered Linux-based infrastructure across Raspberry Pi devices and a PC to run a 24/7 home surveillance system.",
    "Streamed and processed live video with FFmpeg, OpenCV, Python, and Node.js.",
    "Triggered real-time notifications and face detection the moment the front door opens.",
  ],
  tech: [
    allSkills["Linux"],
    allSkills["Raspberry Pi"],
    allSkills["FFmpeg"],
    allSkills["OpenCV"],
    allSkills["Python"],
    allSkills["Node.js"],
  ],
  proof: ["Raspberry Pi infrastructure", "Real-time face detection"],
};

/** Data scientist wording — emphasizes real-time video processing and face detection timestamps. */
export const surveillanceSystemDataScientist: Project = {
  ...surveillanceSystem,
  highlights: [
    "Engineered a home surveillance system that notifies in real time when the front door opens.",
    "Processed live video for face detection on Raspberry Pi hardware using Python, TypeScript, Kotlin, and C with OpenCV and FFmpeg.",
    "Enabled users to jump directly to face-detection timestamps in recorded footage.",
  ],
  tech: [
    allSkills["Python"],
    allSkills["OpenCV"],
    allSkills["Raspberry Pi"],
    allSkills["FFmpeg"],
    allSkills["Linux"],
  ],
  proof: ["Real-time face detection"],
};
