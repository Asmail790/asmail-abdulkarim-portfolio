import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Multilingual neural word segmenter — canonical wording. */
export const wordSegmenter: Project = {
  include: true,
  includeInResume: true,
  title: "Multilingual Neural Word Segmenter",
  description:
    "A neural word segmenter that splits contractions across languages.",
  highlights: [
    "Trained a neural network to split contractions that standard tokenizers mishandle — such as \"don't\" into \"do\" + \"not\".",
    "Achieved correct multilingual splits like \"qu'environ\" into \"qu\" + \"environ\" using sklearn, Keras, NumPy, and Matplotlib.",
  ],
  tech: [
    allSkills["Python"],
    allSkills["Keras"],
    allSkills["scikit-learn"],
    allSkills["NumPy"],
    allSkills["Matplotlib"],
  ],
  year: "2021",
  featured: false,
  liveUrl: null,
  repoUrl: null,
  proof: [],
};

/** Data scientist variant — includes proof. */
export const wordSegmenterDataScientist: Project = {
  ...wordSegmenter,
  proof: ["Neural word segmentation"],
};
