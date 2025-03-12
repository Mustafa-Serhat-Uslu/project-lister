import { useWindowWidth } from "@/app/_utils/_hooks/useWindowSize";

import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import styled from "styled-components";
import { columns } from "./ProjectsTableConfigs";
import { useEffect, useState } from "react";
import { getProjects } from "@/app/_actions/actions";
import { responsiveFont } from "../CommonStyles/CommonStyles";

const EXTRA_SPACE = 240;

const ProjectsTable = () => {
  const windowWidth = useWindowWidth();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      setData(projects);
    };

    fetchData();
  }, []);

  //TODO: ColumnType check
  return (
    <StyledTable<ColumnType> //TODO: types fix
      style={{ width: windowWidth - EXTRA_SPACE }} //For active resizing
      rowKey={"projectId"}
      dataSource={data}
      columns={columns}
      sticky={true}
      pagination={false}
      scroll={{ x: "max-content" }}
    />
  );
};

export default ProjectsTable;

const StyledTable = styled(Table)`
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
