"use client";

import { getFavoriteProjectNames } from "@/app/_actions/actions";
import { FavoritesData } from "@/app/_types/types";
import React, { createContext, useEffect, useMemo, useState } from "react";

export type ProjectsContextType = {
  favoriteProjects: FavoritesData;
};

export const ProjectsContext = createContext<ProjectsContextType>({
  favoriteProjects: {},
});

export const ProjectsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoriteProjects, setFavoriteProjects] = useState<FavoritesData>({});

  useEffect(() => {
    async function fetchFavProjects() {
      const favs: FavoritesData = await getFavoriteProjectNames();
      setFavoriteProjects(favs);
    }
    fetchFavProjects();
  }, []);

  const data = useMemo(
    () => ({
      favoriteProjects,
      setFavoriteProjects,
    }),
    [favoriteProjects]
  );

  return (
    <ProjectsContext.Provider value={data}>{children}</ProjectsContext.Provider>
  );
};
