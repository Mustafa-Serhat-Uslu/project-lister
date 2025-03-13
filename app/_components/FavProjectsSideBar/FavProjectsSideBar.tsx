"use client";

import { ProjectsContextType } from "@/app/_contexts/ProjectsContext/ProjectsContext";
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";
import { Divider, List } from "antd";
import GoToProjectDetailsButton from "../Buttons/GoToProjectDetails/GoToProjectDetailsButton";
import { StyledList } from "./FavProjectsSideBarStyles";

export default function FavProjectsSideBar() {
  const { optimisticFavProjects }: ProjectsContextType = useProjectsContext();

  if (!optimisticFavProjects) return undefined;

  return (
    <div className="flex pr-0 md:pr-2">
      <StyledList
        size="small"
        header={<div>Favorite Projects</div>}
        dataSource={Object.keys(optimisticFavProjects)}
        renderItem={(item) => {
          const projectId = item as keyof typeof optimisticFavProjects;

          return (
            <List.Item>
              <GoToProjectDetailsButton
                projectId={projectId}
                text={optimisticFavProjects[projectId]}
              />
            </List.Item>
          );
        }}
      />
      <Divider className="h-screen border-[1px]" type="vertical" />
    </div>
  );
}
