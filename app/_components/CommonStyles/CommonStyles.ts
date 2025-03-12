import { css } from "styled-components";

export const responsiveFont = css`
  --font-size: 1rem;

  @media only screen and (max-width: 1200px) {
    --font-size: 0.8rem;
  }
  @media only screen and (max-width: 992px) {
    --font-size: 0.7rem;
  }
  @media only screen and (max-width: 768px) {
    --font-size: 0.6rem;
  }
  @media only screen and (max-width: 480px) {
    --font-size: 0.5rem;
  }
  @media only screen and (max-width: 320px) {
    --font-size: 0.4rem;
  }
`;
