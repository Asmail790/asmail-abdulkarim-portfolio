import { allSkills } from "@/data/all-skills";
import type { Project } from "@/data/types";

/** E-commerce website — canonical wording (fullstack). */
export const ecommerce: Project = {
  include: true,
  includeInResume: true,
  title: "E-commerce Website",
  description:
    "A B2B e-commerce platform with checkout and an admin dashboard.",
  highlights: [
    "Shipped a B2B e-commerce platform covering orders, checkout, an admin dashboard, customer management, and taxing.",
    "Built the backend with Vendure and NestJS and the frontend with Next.js, backed by PostgreSQL.",
    "Containerized the environment with Docker and styled it with Tailwind CSS.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Next.js"],
    allSkills["React"],
    allSkills["NestJS"],
    allSkills["Vendure"],
    allSkills["GraphQL"],
    allSkills["PostgreSQL"],
    allSkills["Docker"],
    allSkills["Tailwind CSS"],
  ],
  year: "2025",
  featured: true,
  liveUrl: null,
  repoUrl: "https://github.com/Asmail790/E-ecommerce",
  proof: ["B2B checkout & orders", "Admin dashboard"],
};

/** Backend wording — emphasizes NestJS + Vendure backend stack. */
export const ecommerceBackend: Project = {
  ...ecommerce,
  tech: [
    allSkills["TypeScript"],
    allSkills["NestJS"],
    allSkills["Vendure"],
    allSkills["GraphQL"],
    allSkills["PostgreSQL"],
    allSkills["Docker"],
    allSkills["Next.js"],
  ],
  proof: ["NestJS + Vendure backend", "Postgres data model"],
};

/** DevOps wording — emphasizes Dockerized reproducible deployments. */
export const ecommerceDevops: Project = {
  ...ecommerce,
  highlights: [
    "Shipped a B2B e-commerce platform covering orders, checkout, an admin dashboard, customer management, and taxing.",
    "Built the backend with Vendure and NestJS and the frontend with Next.js on PostgreSQL.",
    "Used a Dockerized environment to make deployments consistent and reproducible.",
  ],
  tech: [
    allSkills["TypeScript"],
    allSkills["Next.js"],
    allSkills["NestJS"],
    allSkills["PostgreSQL"],
    allSkills["Docker"],
    allSkills["GraphQL"],
  ],
  featured: false,
  proof: ["Dockerized deployment", "Postgres + NestJS"],
};
