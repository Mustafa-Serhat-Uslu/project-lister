import React from "react";
import TableRowActions from "./TableRowActions/TableRowActions";
import { Project } from "@/app/_types/types";

export type columnType = {
  title: string;
  dataIndex: string;
  className: string;
  key: string;
  responsive?: string[];
  width: string;
  align: string;
  render?: (_, project: Project) => React.JSX.Element;
};

export const columns: columnType[] = [
  {
    title: "Project ID",
    dataIndex: "projectId",
    key: "projectId",
    className: "projectId",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    width: "8%",
    align: "center" as const,
  },
  {
    title: "Project Name",
    dataIndex: "projectName",
    key: "projectName",
    className: "projectName",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    width: "8%",
    align: "center" as const,
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    className: "startDate",
    responsive: ["sm", "md", "lg", "xl"],
    width: "12%",
    align: "right" as const,
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    className: "endDate",
    responsive: ["sm", "md", "lg", "xl"],
    width: "10%",
    align: "right" as const,
  },
  {
    title: "Project Manager",
    dataIndex: "projectManager",
    key: "projectManager",
    className: "projectManager",
    responsive: ["sm", "md", "lg", "xl"],
    width: "15%",
    align: "center" as const,
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    className: "actions",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    width: "15%",
    align: "center" as const,
    render: (_, project: Project) => (
      <TableRowActions
        projectId={project.projectId}
        isFavorite={project.isFavorite}
      />
    ),
  },
];

// export const datag: DataType[] = [
//   {
//     key: "1",
//     projectId: "project_a",
//     projectName: "Project A",
//     startDate: "2025-01-01",
//     endDate: "2025-12-31",
//     projectManager: "John Doe",
//   },
//   {
//     key: "2",
//     projectId: "project_b",
//     projectName: "Project B",
//     startDate: "2025-01-01",
//     endDate: "2025-12-31",
//     projectManager: "John Doe",
//   },
//   {
//     key: "3",
//     projectId: "project_c",
//     projectName: "Project C",
//     startDate: "2025-01-01",
//     endDate: "2025-12-31",
//     projectManager: "John Doe",
//   },
// ];
