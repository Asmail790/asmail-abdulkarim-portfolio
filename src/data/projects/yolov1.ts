import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** Reimplementation of YOLOv1 object detection — canonical wording. */
export const yolov1: Project = {
  include: true,
  includeInResume: true,
  title: "Reimplementation of YOLOv1 Object Detection",
  description:
    "A from-scratch reimplementation of YOLOv1 for learning, in Python.",
  highlights: [
    "Reimplemented the original YOLOv1 object-detection model from scratch in Python to truly understand how detection models work.",
    "Trained and monitored the model with PyTorch, TorchVision, and TensorBoard.",
  ],
  tech: [
    allSkills["Python"],
    allSkills["PyTorch"],
    allSkills["NumPy"],
    allSkills["TensorBoard"],
  ],
  year: "2023",
  featured: false,
  liveUrl: null,
  repoUrl: "https://github.com/Asmail790/Yolov1",
  proof: [],
};

/** Data scientist variant — featured with proof. */
export const yolov1DataScientist: Project = {
  ...yolov1,
  featured: true,
  proof: ["From-scratch YOLOv1"],
};
