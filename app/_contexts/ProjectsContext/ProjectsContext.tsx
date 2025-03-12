"use client";

import { createContext, useEffect, useMemo, useReducer } from "react";
import { getFavoriteProjects } from "@/app/_actions/actions";
import { FavoritesData } from "@/app/_types/types";
import {
  OptimisticFavoritesAction,
  optimisticFavoritesReducer,
} from "./ProjectsContextActions";

export type ProjectsContextType = {
  optimisticFavProjects: FavoritesData;
  setOptimisticFavProjects: (action: OptimisticFavoritesAction) => void;
};

export const ProjectsContext = createContext<ProjectsContextType>({
  optimisticFavProjects: {},
  setOptimisticFavProjects: () => null,
});

export const ProjectsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [optimisticFavProjects, setOptimisticFavProjects] = useReducer(
    optimisticFavoritesReducer,
    {}
  );

  useEffect(() => {
    async function fetchFavProjects() {
      try {
        const favs: FavoritesData = await getFavoriteProjects();
        setOptimisticFavProjects({ type: "SET", favoritesData: favs });
      } catch (error) {
        console.error("Failed to fetch favorite projects", error);
      }
    }
    fetchFavProjects();
  }, []);

  const data = useMemo(
    () => ({
      optimisticFavProjects,
      setOptimisticFavProjects,
    }),
    [optimisticFavProjects]
  );

  return (
    <ProjectsContext.Provider value={data}>{children}</ProjectsContext.Provider>
  );
};
