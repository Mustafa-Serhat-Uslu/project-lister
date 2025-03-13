import {
  FormProject,
  Project,
  ProjectKeys,
  StringMap,
} from "@/app/_types/types";
import { toCamelCase } from "@/app/_utils/functions/toCamelCase";
import { ValidateStatus } from "antd/es/form/FormItem";
import dayjs from "dayjs";

export const dateFormat = "YYYY-MM-DD";

export const initialValues: Project = {
  projectId: "",
  projectName: "",
  description: "",
  startDate: "",
  endDate: "",
  projectManager: "",
};

export const getFormItemProps = (
  label: string,
  errors: StringMap | undefined
) => {
  const dataKey: ProjectKeys = toCamelCase(label);

  return {
    name: dataKey,
    label: label,
    hasFeedback: true,
    variant: "borderless",
    help: errors?.[dataKey],
    rules: [{ required: true, message: "Please fill!" }],
    validateStatus: errors?.[dataKey] && ("error" as ValidateStatus),
  };
};

export const convertProjectDatesToDayjs = (project: Project): FormProject => {
  return {
    ...project,
    startDate: dayjs(project.startDate, dateFormat),
    endDate: dayjs(project.endDate, dateFormat),
  };
};

export const convertProjectDatesToString = (project: FormProject): Project => {
  return {
    ...project,
    startDate: project.startDate.format(dateFormat),
    endDate: project.endDate.format(dateFormat),
  };
};
