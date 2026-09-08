import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Master's Thesis — MySQL performance tuning — canonical wording. */
export const mastersThesis: Project = {
  include: true,
  includeInResume: true,
  title: "Master's Thesis — MySQL Performance Tuning",
  description:
    "Using machine learning to automatically tune MySQL configuration.",
  highlights: [
    "Automated MySQL performance tuning by applying Bayesian optimization (HyperMapper) to configuration parameters.",
    "Benchmarked the results with BenchBase on Azure, written in Python.",
    "Delivered major speedups over default settings — 440% on TPC-C, 261% on Twitter, and 200% on YCSB.",
  ],
  tech: [
    allSkills["Python"],
    allSkills["MySQL"],
    allSkills["SQL"],
    allSkills["Azure"],
    allSkills["scikit-learn"],
  ],
  year: "2022",
  featured: false,
  liveUrl: "https://lup.lub.lu.se/student-papers/search/publication/9103095",
  repoUrl: null,
  proof: ["440% TPC-C speedup", "Bayesian optimization"],
};

/** Backend variant — featured. */
export const mastersThesisBackend: Project = {
  ...mastersThesis,
  featured: true,
};

/** Data scientist variant — featured. */
export const mastersThesisDataScientist: Project = {
  ...mastersThesis,
  featured: true,
};

/** DevOps wording — emphasizes Azure benchmarking. */
export const mastersThesisDevops: Project = {
  ...mastersThesis,
  highlights: [
    "Automated MySQL performance tuning by applying Bayesian optimization to configuration parameters.",
    "Benchmarked results on Azure with BenchBase across TPC-C, Twitter, and YCSB workloads.",
    "Delivered significant speedups over default settings — 440% on TPC-C, 261% on Twitter, and 200% on YCSB.",
  ],
  proof: ["Azure benchmarks", "440% TPC-C speedup"],
};
