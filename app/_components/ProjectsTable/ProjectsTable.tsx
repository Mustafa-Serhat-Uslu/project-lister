import { useWindowWidth } from "@/app/_utils/_hooks/useWindowSize";

import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import styled from "styled-components";
import { columns } from "./ProjectsTableConfigs";
import { useEffect, useState } from "react";
import { getProjects } from "@/app/_actions/actions";

const FAV_PROJECTS_WIDTH = 220;

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
      style={{ width: windowWidth - FAV_PROJECTS_WIDTH }} //For active resizing
      rowKey={"projectId"}
      dataSource={data}
      columns={columns}
      sticky={true}
      pagination={false}
    />
  );
};

export default ProjectsTable;

const StyledTable = styled(Table)`
  min-width: 16rem;
  white-space: nowrap;
  font-weight: 450;

  .ant-table {
    .ant-table-container {
      .ant-table-header {
        border-radius: 0%;
        font-size: 1rem;

        table .ant-table-cell {
          padding: 0.5rem 0rem;
          font-weight: 450;
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
          padding: 0.5rem 0;
          border-top: solid 0.2rem white;
          border-bottom: none;
        }
      }

      .ant-table-header,
      .ant-table-tbody {
        @media only screen and (max-width: 932px) {
          font-size: 0.6rem;
        }
        @media only screen and (max-width: 481px) {
          font-size: 0.4rem;
        }
      }
    }
  }
`;
