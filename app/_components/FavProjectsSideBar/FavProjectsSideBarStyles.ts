import styled from "styled-components";
import { responsiveFont } from "../CommonStyles/CommonStyles";
import { List } from "antd";

export const StyledList = styled(List)`
  ${responsiveFont}

  width: 12rem;
  padding: 3rem 1rem;
  white-space: nowrap;

  .ant-list-header,
  .ant-list-item {
    border: none;
    padding: 0.15rem;
    font-size: var(--font-size);
  }

  .ant-list-items {
    list-style-type: disc;
    list-style-position: inside;
    margin-left: 1.3rem;
  }

  .ant-list-item {
    display: list-item;
  }

  .ant-btn {
    padding: 0;
    font-size: var(--font-size);
  }

  @media only screen and (max-width: 1200px) {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    width: 11rem;
  }

  @media only screen and (max-width: 768px) {
    width: 10rem;
  }
  @media only screen and (max-width: 480px) {
    width: 5rem;

    .ant-list-items {
      margin-left: 0.1rem;

      .ant-list-item::marker {
        content: none;
      }
    }
  }
`;
