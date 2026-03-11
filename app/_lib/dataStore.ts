import { Project } from "../_types/types";

const isVercel = process.env.VERCEL === "1";

const BLOB_NAME = "data.json";

async function readFromBlob(): Promise<Project[]> {
  const { list } = await import("@vercel/blob");
  const { blobs } = await list({ prefix: BLOB_NAME });

  if (blobs.length === 0) return [];

  const response = await fetch(blobs[0].url);
  return response.json();
}

async function writeToBlob(data: Project[]): Promise<void> {
  const { put } = await import("@vercel/blob");
  await put(BLOB_NAME, JSON.stringify(data, null, 2), {
    access: "public",
    addRandomSuffix: false,
  });
}

async function readFromFile(): Promise<Project[]> {
  const fs = await import("fs/promises");
  const path = await import("path");
  const filePath = path.join(process.cwd(), "data", "data.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return raw ? JSON.parse(raw) : [];
}

async function writeToFile(data: Project[]): Promise<void> {
  const fs = await import("fs/promises");
  const path = await import("path");
  const filePath = path.join(process.cwd(), "data", "data.json");
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function readProjects(): Promise<Project[]> {
  return isVercel ? readFromBlob() : readFromFile();
}

export async function writeProjects(data: Project[]): Promise<void> {
  return isVercel ? writeToBlob(data) : writeToFile(data);
}
