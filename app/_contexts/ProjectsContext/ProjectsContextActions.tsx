import { FavoritesData, Project } from "@/app/_types/types";

export type OptimisticFavoritesAction =
  | { type: "SET"; favoritesData: FavoritesData }
  | { type: "SAVE"; project: Project }
  | { type: "TOGGLE"; project: Project };

export const optimisticFavoritesReducer = (
  state: FavoritesData,
  action: OptimisticFavoritesAction
): FavoritesData => {
  const { type } = action;

  switch (type) {
    case "SET": {
      const { favoritesData } = action;

      return { ...favoritesData };
    }

    case "SAVE": {
      const { project } = action;

      if (project?.projectName === state?.[project.projectId]) return state;

      return { ...state, [project.projectId]: project.projectName };
    }

    case "TOGGLE": {
      const { project } = action;

      //remove project from favs
      if (state[project.projectId]) {
        const { [project.projectId]: _, ...rest } = state;
        return rest;
      }

      //add project to favs
      return { ...state, [project.projectId]: project.projectName };
    }

    default:
      return state;
  }
};
