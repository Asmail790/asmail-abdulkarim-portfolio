import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** House Sale Price Analysis — canonical wording (data scientist). */
export const housePrice: Project = {
  include: true,
  includeInResume: true,
  title: "House Sale Price Analysis",
  description:
    "A regression analysis predicting house sale prices from property features.",
  highlights: [
    "Predicted house sale prices with regression across features such as build date, heating, room count, and lot area.",
    "Cleaned noisy sale data with outlier detection and imputation using pandas, scipy, sklearn, mlxtend, matplotlib, and seaborn.",
    "Delivered an end-to-end, interpretable prediction notebook.",
  ],
  tech: [
    allSkills["Python"],
    allSkills["Pandas"],
    allSkills["NumPy"],
    allSkills["scikit-learn"],
    allSkills["Matplotlib"],
    allSkills["SQL"],
  ],
  year: "2023",
  featured: true,
  liveUrl: "https://www.kaggle.com/code/asmailabdulkarim/house-prices-final",
  repoUrl: null,
  proof: ["Kaggle notebook", "Regression + outlier detection"],
};
