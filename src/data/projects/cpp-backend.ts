import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** C++ backend for the "Unblock Me" puzzle solver — canonical wording. */
export const cppBackend: Project = {
  include: true,
  includeInResume: true,
  title: "C++ Backend for 'Unblock Me' Puzzle Solver",
  description:
    "A C++ rewrite of the puzzle solver's Python backend for higher efficiency.",
  highlights: [
    "Rewrote the puzzle solver's Python backend in C++ for higher efficiency and integrated it through JNI.",
    "Standardized the build with CMake and enforced correctness with Catch2 unit tests.",
    "Shipped a faster native solver backend that is fully unit-tested at the integration boundary.",
  ],
  tech: [
    allSkills["C++"],
    allSkills["C"],
    allSkills["CMake"],
    allSkills["Catch2"],
    allSkills["Unit Tests"],
  ],
  year: "2023 — 2024",
  featured: false,
  liveUrl: null,
  repoUrl: "https://github.com/Asmail790/unblock_me_solver_cpp_extension",
  proof: ["C++ via JNI", "CMake + Catch2"],
};

/** Tester / QA wording — emphasizes strict clang-tidy and test coverage. */
export const cppBackendTesterQa: Project = {
  ...cppBackend,
  highlights: [
    "Rewrote the puzzle solver's Python backend in C++ and integrated it through JNI.",
    "Enforced a strict clang-tidy setup with extensive unit and integration testing in Catch2 to keep the native rewrite bug-free.",
    "Shipped a faster native solver backend guarded by a robust test suite.",
  ],
  tech: [
    allSkills["C++"],
    allSkills["C"],
    allSkills["CMake"],
    allSkills["Catch2"],
    allSkills["Unit Tests"],
    allSkills["Integration Tests"],
  ],
  proof: ["Catch2 unit/integration tests", "clang-tidy strict setup"],
};
