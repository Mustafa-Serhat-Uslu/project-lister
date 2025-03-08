import { Project } from "@/app/_types/types";
import styled from "styled-components";

const StyledSvg = styled.svg<{ $isFavorite?: boolean }>`
  width: 2.2rem;
  height: 1.7rem;
  stroke-width: 20;
  stroke-linecap: round;
  stroke-linejoin: round;

  ${({ $isFavorite }) =>
    $isFavorite
      ? `
    fill: #fa516d;
    stroke: none;
    polygon{
      fill: white;
    }
  `
      : `
    fill: white;
    stroke: black;
  `}
`;

export const FavoriteSvg = ({
  isFavorite,
}: {
  isFavorite: Project["isFavorite"];
}) => (
  <StyledSvg $isFavorite={isFavorite} viewBox="0 0 512 512">
    <g data-name="Layer 2" id="Layer_2">
      <g>
        <path d="M321.27,502,165.63,395,10,502V40.12A30.13,30.13,0,0,1,40.12,10h251a30.13,30.13,0,0,1,30.13,30.12Z" />
        <polygon points="165.63 110.41 195 169.9 260.65 179.44 213.14 225.75 224.36 291.14 165.63 260.27 106.91 291.14 118.12 225.75 70.61 179.44 136.27 169.9 165.63 110.41" />
      </g>
    </g>
  </StyledSvg>
);
