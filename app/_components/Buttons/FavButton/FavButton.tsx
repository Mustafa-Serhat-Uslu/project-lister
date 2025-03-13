"use client";

import { Button } from "antd";
import { FavoriteSvg } from "@/app/assets/svgs/FavoriteSvg";
import styled from "styled-components";
import { toggleFavorite } from "@/app/_actions/actions";
import { Project } from "@/app/_types/types";
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";

const StyledFavButton = styled(Button)`
  padding: 0;
  border: none;
  box-shadow: none;
  background-color: inherit;
`;

const FavButton = ({ project }: { project: Project }) => {
  const { optimisticFavProjects, setOptimisticFavProjects } =
    useProjectsContext();

  async function handleClick() {
    setOptimisticFavProjects({ type: "TOGGLE", project });
    try {
      await toggleFavorite(project.projectId);
    } catch (error) {
      console.error("Failed to toggle favorite status", error);
      setOptimisticFavProjects({ type: "TOGGLE", project });
    }
  }

  return (
    <StyledFavButton type="default" onClick={handleClick}>
      <FavoriteSvg
        isFavorite={Boolean(optimisticFavProjects?.[project.projectId])}
      />
    </StyledFavButton>
  );
};

export default FavButton;
