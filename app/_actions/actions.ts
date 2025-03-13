"use server";

import fs from "fs/promises";
import path from "path";
import {
  FavoritesData,
  FormState,
  Project,
  RequestState,
} from "../_types/types";
import { ProjectSchema } from "../_schemas/projectSchema";
import { convertZodErrors } from "../_utils/errors/errors";

const filePath = path.join(process.cwd(), "data", "data.json");

export async function getProjects(): Promise<RequestState<Project[]>> {
  // await new Promise((resolve) => setTimeout(resolve, 500)); //TODO: remove delay after testing
  try {
    const rawProjects = await fs.readFile(filePath, "utf-8");
    return { data: JSON.parse(rawProjects) };
  } catch (error) {
    console.error("Error reading projects:", error);
    return { msg: "Error reading projects" };
  }
}

export async function getProject(
  projectId: string
): Promise<RequestState<Project | undefined>> {
  try {
    const { data, msg } = await getProjects();

    if (!data) return { msg };

    return { data: data.find((p: Project) => p.projectId === projectId) };
  } catch (error) {
    console.error("Error retrieving project:", error);
    return { msg: "Error retrieving project." };
  }
}

async function checkProjectForErrors(project: Project) {
  const validatedProject = ProjectSchema.safeParse(project);
  if (!validatedProject.success) {
    return convertZodErrors(validatedProject.error);
  }
}

export const addProject = async (newProject: Project): Promise<FormState> => {
  try {
    const errors = await checkProjectForErrors(newProject);
    if (errors) return { errors };

    const { data: projects, msg } = await getProjects();

    if (!projects) return { msg };

    projects.push({ ...newProject, isFavorite: false });
    await fs.writeFile(filePath, JSON.stringify(projects, null, 2), "utf-8");
  } catch (e) {
    console.error("Error creating project:", e);
    return { msg: "Error creating project." };
  }

  return { msg: "Project created successfully!" };
};

export async function updateProject(
  updatedProject: Project
): Promise<FormState> {
  try {
    const errors = await checkProjectForErrors(updatedProject);
    if (errors) return { errors };

    const { data: projects, msg } = await getProjects();

    if (!projects) return { msg };

    const indexToUpdate = projects.findIndex(
      (p: Project) => p.projectId === updatedProject.projectId
    );
    if (indexToUpdate === -1) return { msg: "Project doesn't exist." };

    projects[indexToUpdate] = updatedProject;

    await fs.writeFile(filePath, JSON.stringify(projects, null, 2), "utf-8");
  } catch (e) {
    console.error("Error updating project:", e);
    return { msg: "Error updating project." };
  }

  return { msg: "Project updated successfully!" };
}

export async function toggleFavorite(
  projectid: string
): Promise<RequestState<void>> {
  try {
    const { data: projects, msg } = await getProjects();

    if (!projects) return { msg };

    const indexToUpdate = projects.findIndex(
      (p: Project) => p.projectId === projectid
    );
    if (indexToUpdate === -1) return { msg: "Project doesn't exist anymore." };

    projects[indexToUpdate] = {
      ...projects[indexToUpdate],
      isFavorite: !projects[indexToUpdate].isFavorite,
    };

    await fs.writeFile(filePath, JSON.stringify(projects, null, 2), "utf-8");
  } catch (e) {
    console.error("Error toggling favorite:", e);
    return { msg: "Error toggling favorite." };
  }

  return { msg: "Favorites Updated!" };
}

export async function getFavoriteProjects(): Promise<
  RequestState<FavoritesData>
> {
  let favoriteProjects: FavoritesData = {};

  try {
    const { data, msg } = await getProjects();
    if (!data) return { msg };

    favoriteProjects = data.reduce((acc: FavoritesData, p: Project) => {
      if (p.isFavorite) {
        acc[p.projectId] = p.projectName;
      }
      return acc;
    }, {});

    return { data: favoriteProjects };
  } catch (e) {
    console.error("Error getting favorite projects:", e);
    return { msg: "Error getting favorite projects." };
  }
}
