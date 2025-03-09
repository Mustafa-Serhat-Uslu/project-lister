import dayjs from "dayjs";

export type Project = {
  projectId: string;
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  projectManager: string;
  isFavorite?: boolean;
};

export type FormProject = Project & {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
};

export type ProjectKeys = keyof Project;

export type FormState = {
  msg?: string;
  errors?: StringMap;
};

export type StringMap = {
  [key: string]: string;
};

export type FavoritesData = Record<
  Project["projectId"],
  Project["projectName"]
>;
