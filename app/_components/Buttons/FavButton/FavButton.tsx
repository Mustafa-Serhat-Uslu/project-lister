"use client";

import { Button } from "antd";
import { FavoriteSvg } from "@/app/assets/svgs/FavoriteSvg";
import styled from "styled-components";
import { toggleFavorite } from "@/app/_actions/actions";
import { Project } from "@/app/_types/types";
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";
import toast from "react-hot-toast";

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
      const { msg, failed } = await toggleFavorite(project.projectId);

      if (msg) toast(msg);
      if (failed) setOptimisticFavProjects({ type: "TOGGLE", project }); // revert
    } catch (error) {
      console.error("Failed to toggle favorite status", error);
      setOptimisticFavProjects({ type: "TOGGLE", project }); //revert
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
