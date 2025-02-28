import { Button } from "antd";
import { FavoriteSvg } from "@/app/assets/svgs/FavoriteSvg";
import styled from "styled-components";

const StyledFavButton = styled(Button)`
  padding: 0;
`;

const FavButton = ({ projectId }: { projectId: string }) => {
  return (
    <StyledFavButton type="text">
      <FavoriteSvg isFavorite={true} />
    </StyledFavButton>
  );
};

export default FavButton;
