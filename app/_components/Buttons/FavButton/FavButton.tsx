import { Button } from "antd";
import { FavoriteSvg } from "@/app/assets/svgs/FavoriteSvg";
import styled from "styled-components";
import { toggleFavorite } from "@/app/_actions/actions";
import { Project } from "@/app/_types/types";

const StyledFavButton = styled(Button)`
  padding: 0;
  border: none;
  box-shadow: none;
`;

const FavButton = ({
  projectId,
  isFavorite,
}: {
  projectId: Project["projectId"];
  isFavorite: Project["isFavorite"];
}) => {
  //TODO: optimistic toggle

  return (
    <StyledFavButton type="default" onClick={() => toggleFavorite(projectId)}>
      <FavoriteSvg isFavorite={isFavorite} />
    </StyledFavButton>
  );
};

export default FavButton;
