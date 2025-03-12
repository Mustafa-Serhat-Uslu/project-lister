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
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";
import { responsiveFont } from "../CommonStyles/CommonStyles";

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

const ProjectForm = ({
  existingProject,
  buttons,
  disabledFields,
}: {
  existingProject?: Project | undefined;
  buttons: React.JSX.Element;
  disabledFields?: ProjectKeys[];
}) => {
  const { setOptimisticFavProjects } = useProjectsContext();
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

    const revertOptimisticFavProjectsUpdate = () => {
      if (existingProject && existingProject?.isFavorite)
        setOptimisticFavProjects({ type: "SAVE", project: existingProject });
    };

    try {
      if (existingProject) {
        if (existingProject.isFavorite) {
          setOptimisticFavProjects({ type: "SAVE", project: projectToSend });
        }
        ({ errors, msg } = await updateProject(projectToSend));
      } else {
        ({ errors, msg } = await addProject(projectToSend));
      }

      //TODO: Move to finally?
      if (errors) {
        revertOptimisticFavProjectsUpdate();
        setErrors(errors);
      } else {
        console.log(msg); // TODO: add toaster with msg
        setErrors(undefined);
        router.replace("/projects");
      }
    } catch (e) {
      revertOptimisticFavProjectsUpdate();
      console.log("Error occurred: ", e);
    }
  }

  return (
    <Form
      className="w-full h-full flex flex-col gap-2 [@media(min-width:575px)]:gap-4"
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
          minLength={3}
          maxLength={12}
          autoComplete={"off"}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("Project Name", errors)}>
        <Input
          variant={
            disabledFields?.includes("projectName") ? "borderless" : "outlined"
          }
          minLength={1}
          maxLength={12}
          autoComplete={"off"}
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
          autoComplete={"off"}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("Start Date", errors)}>
        <DatePicker
          variant={
            disabledFields?.includes("startDate") ? "borderless" : "outlined"
          }
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          placeholder={""}
          format={dateFormat}
          autoComplete={"off"}
        />
      </StyledFormItem>

      <StyledFormItem {...getFormItemProps("End Date", errors)}>
        <DatePicker
          variant={
            disabledFields?.includes("endDate") ? "borderless" : "outlined"
          }
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          placeholder={""}
          format={dateFormat}
          autoComplete={"off"}
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
          maxLength={16}
          autoComplete={"off"}
        />
      </StyledFormItem>

      {buttons}
    </Form>
  );
};

export default ProjectForm;

const StyledFormItem = styled(Form.Item)`
  ${responsiveFont}
  --form-item-gap: 1.3rem;
  --input-border-width: 0.08rem;

  .ant-row {
    flex-direction: row;
    gap: var(--form-item-gap);

    .ant-col {
      width: 8rem;

      svg {
        display: none;
      }

      &.ant-form-item-label {
        margin-right: 2rem;
      }

      label {
        &::before,
        &::after {
          content: none !important;
        }
      }

      label,
      textarea,
      input {
        font-size: var(--font-size);
      }

      input:-webkit-autofill {
        background-color: transparent !important;
        box-shadow: 0 0 0px 1000px white inset !important;
        color: #000 !important;
      }

      .ant-input-affix-wrapper,
      textarea,
      .ant-picker {
        border-radius: 0;
        border-color: black;
        border-width: var(--input-border-width);
      }

      textarea {
        resize: none;
      }

      .ant-input-affix-wrapper:has(input),
      .ant-picker {
        width: 10rem;
        height: 2rem;
      }

      .ant-input-borderless:has(#projectManager) {
        width: 15rem;
      }

      .ant-input-textarea-affix-wrapper {
        width: 24rem;
        height: 10rem;

        &.ant-input-borderless {
          height: fit-content;
        }
      }
      .ant-form-item-additional {
        position: absolute;
        bottom: calc(-1 * var(--font-size) - 0.35rem);
        left: 0;
        .ant-form-item-explain-error {
          font-size: var(--font-size);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    --form-item-gap: 0;
    --input-border-width: 0.05rem;
    margin-bottom: 0;

    .ant-row {
      flex-direction: row;

      .ant-col {
        padding-bottom: 0;

        &.ant-form-item-label {
          width: 5rem;
          height: 1.5rem;
          margin-right: 0.8rem;
        }

        .ant-input-textarea-affix-wrapper {
          width: 20rem;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .ant-row .ant-col .ant-input-textarea-affix-wrapper {
      width: 17rem;
    }
  }
  @media only screen and (max-width: 320px) {
    .ant-row .ant-col .ant-input-textarea-affix-wrapper {
      width: 12rem;
    }
  }
`;
