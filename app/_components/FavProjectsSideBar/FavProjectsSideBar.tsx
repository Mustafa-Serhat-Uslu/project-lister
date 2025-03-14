"use client";

import { ProjectsContextType } from "@/app/_contexts/ProjectsContext/ProjectsContext";
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";
import { Divider } from "antd";
import FavProjectsList from "./FavProjectsList/FavProjectsList";

export default function FavProjectsSideBar() {
  const { optimisticFavProjects }: ProjectsContextType = useProjectsContext();

  if (!optimisticFavProjects) return undefined;

  return (
    <div className="flex pr-0 md:pr-2 sm:ml-1 lg:ml-4">
      <FavProjectsList optimisticFavProjects={optimisticFavProjects} />
      <Divider className="h-screen border-[1px]" type="vertical" />
    </div>
  );
}
