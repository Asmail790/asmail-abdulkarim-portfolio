import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** "Unblock Me" puzzle solver Android app — canonical wording. */
export const puzzleSolver: Project = {
  include: true,
  includeInResume: true,
  title: "Puzzle Solver for 'Unblock Me'",
  description:
    "An Android app that solves 'Unblock Me' puzzles and guides the user to the solution.",
  highlights: [
    "Developed an Android app in Kotlin and Python that solves 'Unblock Me' boards in the fewest steps and guides the user through the solution.",
    "Integrated a YOLOv8s detection model (Ultralytics), PyTorch-Android, the MediaProjection API, and Chaquopy to read and solve live boards.",
    "Automated block movement on rooted devices for fully hands-free solving.",
  ],
  tech: [
    allSkills["Kotlin"],
    allSkills["Python"],
    allSkills["Android"],
    allSkills["OpenCV"],
    allSkills["PyTorch"],
    allSkills["YOLO"],
    allSkills["scikit-learn"],
    allSkills["NumPy"],
  ],
  year: "2023 — 2024",
  featured: false,
  liveUrl: null,
  repoUrl: null,
  proof: [],
};

/** Data scientist wording — highlights YOLOv8s detection. */
export const puzzleSolverDataScientist: Project = {
  ...puzzleSolver,
  proof: ["YOLOv8s block detection", "AI + Android"],
};
