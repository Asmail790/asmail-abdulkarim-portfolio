import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** PhoneDB — smartphone database website — canonical wording. */
export const phonedb: Project = {
  include: true,
  includeInResume: true,
  title: "PhoneDB — Smartphone Database Website",
  description:
    "A website featuring a searchable database of phones with reviews.",
  highlights: [
    "Centralized scattered phone specs and reviews into a searchable, data-driven website.",
    "Built it with C# (.NET 9), ASP.NET MVC and Razor Pages on Entity Framework Core, styled with Bootstrap and jQuery, and tested with XUnit/NUnit.",
    "Shipped a structured phone database that is trivial to extend with new brands and models.",
  ],
  tech: [
    allSkills["C#"],
    allSkills["ASP.NET Core"],
    allSkills["Razor Pages"],
    allSkills["Entity Framework Core"],
    allSkills["SQL"],
    allSkills["Bootstrap"],
    allSkills["jQuery"],
  ],
  year: "2024",
  featured: false,
  liveUrl: null,
  repoUrl: null,
  proof: ["C#/.NET 9", "ASP.NET MVC + Razor Pages"],
};

/** Backend variant — featured on the backend page. */
export const phonedbBackend: Project = {
  ...phonedb,
  featured: true,
};

/** Tester / QA wording — emphasizes XUnit/NUnit verification. */
export const phonedbTesterQa: Project = {
  ...phonedb,
  highlights: [
    "Centralized scattered phone specs and reviews into a searchable, data-driven website.",
    "Built it with C# (.NET 9), ASP.NET MVC and Razor Pages on Entity Framework Core.",
    "Verified data and page logic with XUnit/NUnit tests and styled it with Bootstrap.",
  ],
  tech: [
    allSkills["C#"],
    allSkills["ASP.NET Core"],
    allSkills["Razor Pages"],
    allSkills["Entity Framework Core"],
    allSkills["SQL"],
    allSkills["Bootstrap"],
  ],
  proof: ["XUnit/NUnit tests", "C#/.NET 9"],
};
