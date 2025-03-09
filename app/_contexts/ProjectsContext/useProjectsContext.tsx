"use client"; //TODO: ?

import { useContext } from "react";
import { ProjectsContext } from "./ProjectsContext";

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);

  if (context === undefined) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsContextProvider"
    );
  }

  return context;
};
