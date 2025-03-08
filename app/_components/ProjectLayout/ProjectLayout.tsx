"use client";

import {
  FormProject,
  Project,
  ProjectKeys,
  StringMap,
} from "@/app/_types/types";
import { DatePicker, Form, Input } from "antd";
import { addProject, updateProject } from "@/app/_actions/actions";
import { useState } from "react";
import styled from "styled-components";
import { ValidateStatus } from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { toCamelCase } from "@/app/_utils/_functions/toCamelCase";
import { useRouter } from "next/navigation";

const getFormItemProps = (label: string, errors: StringMap | undefined) => {
  const dataKey: ProjectKeys = toCamelCase(label);

  return {
    name: dataKey,
    label: label,
    hasFeedback: true,
    help: errors?.[dataKey],
    validateStatus: errors?.[dataKey] && ("error" as ValidateStatus),
    rules: [{ required: true, message: "Please fill!" }],
    variant: "borderless",
  };
};

const dateFormat = "YYYY-MM-DD";

const initialValues: Project = {
  projectId: "",
  projectName: "",
  description: "",
  startDate: "",
  endDate: "",
  projectManager: "",
};

//TODO: use mapping
const ProjectLayout = ({
  existingProject,
  buttons,
  disabledFields,
}: {
  existingProject?: Project | undefined;
  buttons: React.JSX.Element;
  disabledFields?: ProjectKeys[];
}) => {
  const [errors, setErrors] = useState<StringMap | undefined>(undefined);
  const [form] = Form.useForm();
  const router = useRouter();

  async function onFinish(project: FormProject): Promise<void> {
    let errors, msg;

    const projectToSend = {
      ...project,
      startDate: project.startDate.format(dateFormat),
      endDate: project.endDate.format(dateFormat),
    };

    try {
      if (existingProject) {
        ({ errors, msg } = await updateProject(projectToSend));
      } else {
        ({ errors, msg } = await addProject(projectToSend));
      }

      if (errors) {
        setErrors(errors);
      } else {
        console.log(msg); // TODO: add toaster with msg
        if (errors) setErrors(undefined);
        router.replace("/projects");
      }
    } catch (e) {
      console.log("Error occurred: ", e);
    }
  }

  return (
    <Form
      className="w-full h-full flex flex-col gap-4"
      form={form}
      initialValues={
        (existingProject && {
          ...existingProject,
          startDate: dayjs(existingProject.startDate, dateFormat),
          endDate: dayjs(existingProject.endDate, dateFormat),
        }) ||
        initialValues
      }
      onFinish={onFinish}
    >
      <StyledFormItem {...getFormItemProps("Project ID", errors)}>
        <Input
          variant={
            disabledFields?.includes("projectId") ? "borderless" : "outlined"
          }
          minLength={5}
          maxLength={12}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("Project Name", errors)}>
        <Input
          variant={
            disabledFields?.includes("projectName") ? "borderless" : "outlined"
          }
          minLength={1}
          maxLength={100}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("Description", errors)}>
        <TextArea
          variant={
            disabledFields?.includes("description") ? "borderless" : "outlined"
          }
          rows={4}
          minLength={1}
          maxLength={325}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("Start Date", errors)}>
        <DatePicker
          variant={
            disabledFields?.includes("startDate") ? "borderless" : "outlined"
          }
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          format={dateFormat}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("End Date", errors)}>
        <DatePicker
          variant={
            disabledFields?.includes("endDate") ? "borderless" : "outlined"
          }
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          format={dateFormat}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("Project Manager", errors)}>
        <Input
          variant={
            disabledFields?.includes("projectManager")
              ? "borderless"
              : "outlined"
          }
          minLength={1}
          maxLength={35}
        />
      </StyledFormItem>

      {buttons}
    </Form>
  );
};

export default ProjectLayout;

//TODOS: get rid of bottom right text area over
const StyledFormItem = styled(Form.Item)`
  svg {
    display: none;
  }
  .ant-row {
    gap: 1.3rem;

    .ant-col {
      width: 8rem; //TODO: may need recheck

      label {
        &::before,
        &::after {
          content: none !important;
        }
      }

      .ant-input-affix-wrapper,
      textarea,
      .ant-picker {
        border-radius: 0;
        border-color: black;
        border-width: 0.08rem;
      }

      .ant-input-affix-wrapper:has(input),
      .ant-picker {
        width: 10rem;
      }

      .ant-input-textarea-affix-wrapper {
        width: 24rem;
        height: 10rem;
      }
    }
  }
`;
