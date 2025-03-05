import { Button } from "antd";
import { FavoriteSvg } from "@/app/assets/svgs/FavoriteSvg";
import styled from "styled-components";

const StyledFavButton = styled(Button)`
  padding: 0;
  border: none;
  box-shadow: none;
`;

const FavButton = ({ projectId }: { projectId: string }) => {
  return (
    <StyledFavButton type="default">
      <FavoriteSvg isFavorite={false} />
    </StyledFavButton>
  );
};

export default FavButton;
