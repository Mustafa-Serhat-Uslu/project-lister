"use client";

import { createContext, useEffect, useMemo, useReducer } from "react";
import { getFavoriteProjects } from "@/app/_actions/actions";
import { FavoritesData } from "@/app/_types/types";
import {
  OptimisticFavoritesAction,
  optimisticFavoritesReducer,
} from "./ProjectsContextActions";
import toast from "react-hot-toast";

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
        const { data, msg } = await getFavoriteProjects();

        if (data) {
          setOptimisticFavProjects({ type: "SET", favoritesData: data });
          return;
        }
        if (msg) toast(msg);
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
