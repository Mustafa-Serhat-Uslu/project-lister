import { useEffect, useState } from "react";
import { StyledTable } from "./ProjectsTableStyles";
import { getProjects } from "@/app/_actions/actions";
import { columns } from "./ProjectsTableConfigs";
import { Project } from "@/app/_types/types";
import { ColumnType } from "antd/es/table";
import { useWindowWidth } from "@/app/_utils/hooks/useWindowSize";

const EXTRA_SPACE = 240;

const ProjectsTable = () => {
  const windowWidth = useWindowWidth();

  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects: Project[] = await getProjects();
      setData(projects);
    };

    fetchData();
  }, []);

  return (
    <StyledTable<Project>
      style={{ width: windowWidth - EXTRA_SPACE }} //For active resizing
      rowKey={"projectId"}
      dataSource={data}
      columns={columns as ColumnType<Project>[]}
      sticky={true}
      pagination={false}
      scroll={{ x: "max-content" }}
    />
  );
};

export default ProjectsTable;
