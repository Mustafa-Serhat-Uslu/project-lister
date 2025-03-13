import React from "react";
import TableRowActions from "./TableRowActions/TableRowActions";
import { Project } from "@/app/_types/types";
import NavigateButton from "../Buttons/NavigateButton/NavigateButton";

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
    width: "3rem",
    align: "center",
    render: (_, project: Project) => (
      <NavigateButton
        key={project.projectId}
        path={`/projects/${project.projectId}`}
        text={project.projectId}
        typeOverride="text"
      />
    ),
  },
  {
    title: "Project Name",
    dataIndex: "projectName",
    key: "projectName",
    className: "projectName",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    width: "3.5rem",
    align: "center",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    className: "startDate",
    responsive: ["md", "lg", "xl"],
    width: "7rem",
    align: "right",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    className: "endDate",
    responsive: ["md", "lg", "xl"],
    width: "2.8rem",
    align: "right",
  },
  {
    title: "Project Manager",
    dataIndex: "projectManager",
    key: "projectManager",
    className: "projectManager",
    responsive: ["sm", "md", "lg", "xl"],
    width: "7rem",
    align: "center",
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    className: "actions",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    width: "3rem",
    align: "center",
    render: (_, project: Project) => <TableRowActions project={project} />,
  },
];
