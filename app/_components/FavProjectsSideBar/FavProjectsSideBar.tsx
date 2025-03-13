"use client";

import { ProjectsContextType } from "@/app/_contexts/ProjectsContext/ProjectsContext";
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";
import { Divider, List } from "antd";

import { StyledList } from "./FavProjectsSideBarStyles";
import NavigateButton from "../Buttons/NavigateButton/NavigateButton";

export default function FavProjectsSideBar() {
  const { optimisticFavProjects }: ProjectsContextType = useProjectsContext();

  if (!optimisticFavProjects) return undefined;

  return (
    <div className="flex pr-0 md:pr-2 sm:ml-1 lg:ml-4">
      <StyledList
        size="small"
        header={<div>Favorite Projects</div>}
        dataSource={Object.keys(optimisticFavProjects)}
        renderItem={(item) => {
          const projectId = item as keyof typeof optimisticFavProjects;

          return (
            <List.Item>
              <NavigateButton
                path={`/projects/${projectId}`}
                text={optimisticFavProjects[projectId]}
                typeOverride="text"
              />
            </List.Item>
          );
        }}
      />
      <Divider className="h-screen border-[1px]" type="vertical" />
    </div>
  );
}
