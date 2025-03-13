import { responsiveFont } from "../CommonStyles/CommonStyles";
import styled from "styled-components";
import { TableProps } from "antd/es/table";
import { Table } from "antd";
import { Project } from "@/app/_types/types";

export const StyledTable = styled(Table)<TableProps<Project>>`
  ${responsiveFont}

  --font-weight: 450;

  min-width: 16rem;
  max-width: 90rem;
  white-space: nowrap;

  .ant-table {
    .ant-table-container {
      .ant-table-header {
        border-radius: 0%;
        font-size: var(--font-size);

        table .ant-table-cell {
          padding: 0.5rem 0rem;
          font-weight: var(--font-weight);
          border: none;
          border-start-start-radius: 0;
          border-start-end-radius: 0;
          background-color: #dfdfdf;

          &::before {
            content: none !important;
          }
        }
      }

      .ant-table-tbody {
        background-color: #fafafa;

        .ant-table-cell {
          font-size: var(--font-size);
          padding: 0.5rem 0;
          border-top: solid 0.2rem white;
          border-bottom: none;
          font-weight: var(--font-weight);

          &.projectId .ant-btn {
            padding: 0.2rem;
            font-size: var(--font-size);
            font-weight: var(--font-weight);
          }
        }
      }
    }
  }
`;
