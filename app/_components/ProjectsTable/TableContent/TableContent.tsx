import { StyledTable } from "../ProjectsTableStyles";
import { ColumnType } from "antd/es/table";
import { Project } from "@/app/_types/types";
import { columns } from "../ProjectsTableConfigs";

const TableContent = ({ data, width }: { data: Project[]; width: number }) => {
  return (
    <StyledTable<Project>
      style={{ width }} //For active resizing
      rowKey={"projectId"}
      dataSource={data}
      columns={columns as ColumnType<Project>[]}
      sticky={true}
      pagination={false}
      scroll={{ x: "max-content" }}
    />
  );
};

export default TableContent;
