"use server";

import fs from "fs/promises";
import path from "path";
import { FavoritesData, FormState, Project } from "../_types/types";
import { ProjectSchema } from "../_schemas/projectSchema";
import { convertZodErrors } from "../_utils/errors/errors";

const filePath = path.join(process.cwd(), "data", "data.json");

export async function getProjects() {
  try {
    const rawProjects = await fs.readFile(filePath, "utf-8");
    return JSON.parse(rawProjects);
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}

export async function getProject(projectId: string) {
  try {
    const projects = await getProjects();
    return projects.find((p: Project) => p.projectId === projectId);
  } catch (error) {
    console.error("Error retrieving project:", error);
    return;
  }
}

async function checkProjectForErrors(project: Project) {
  const validatedProject = ProjectSchema.safeParse(project);
  if (!validatedProject.success) {
    return convertZodErrors(validatedProject.error);
  }
}

export const addProject = async (newProject: Project): Promise<FormState> => {
  const errors = await checkProjectForErrors(newProject);
  if (errors) return { errors };

  const projects = await getProjects();
  projects.push({ ...newProject, isFavorite: false });
  await fs.writeFile(filePath, JSON.stringify(projects, null, 2), "utf-8");

  return { msg: "Project created successfully!" };
};

export async function updateProject(
  updatedProject: Project
): Promise<FormState> {
  const errors = await checkProjectForErrors(updatedProject);
  if (errors) return { errors };

  const projects = await getProjects();
  const indexToUpdate = projects.findIndex(
    (p: Project) => p.projectId === updatedProject.projectId
  );
  if (indexToUpdate === -1) return { msg: "Project doesn't exist." };

  projects[indexToUpdate] = updatedProject;

  await fs.writeFile(filePath, JSON.stringify(projects, null, 2), "utf-8");

  return { msg: "Project updated successfully!" };
}

export async function toggleFavorite(projectid: string): Promise<FormState> {
  const projects = await getProjects();
  const indexToUpdate = projects.findIndex(
    (p: Project) => p.projectId === projectid
  );
  if (indexToUpdate === -1) return { msg: "Project doesn't exist anymore." };

  projects[indexToUpdate] = {
    ...projects[indexToUpdate],
    isFavorite: !projects[indexToUpdate].isFavorite,
  };

  await fs.writeFile(filePath, JSON.stringify(projects, null, 2), "utf-8");

  return { msg: "Favorites Updated!" };
}

export async function getFavoriteProjectNames(): Promise<
  Project["projectName"][]
> {
  const projects = await getProjects();

  const gg = projects.reduce((acc: FavoritesData, p: Project) => {
    if (p.isFavorite) {
      acc[p.projectId] = p.projectName;
    }
    return acc;
  }, {});

  return gg;
}
