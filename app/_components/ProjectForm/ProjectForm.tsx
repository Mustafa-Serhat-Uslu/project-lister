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
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";
import { StyledFormItem } from "./ProjectFormStyles";
import {
  convertProjectDatesToDayjs,
  convertProjectDatesToString,
  dateFormat,
  getFormItemProps,
  initialValues,
} from "./ProjectFormUtils";
import toast from "react-hot-toast";

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
    let errors, msg, failed;

    const projectToSend = convertProjectDatesToString(project);

    const optimisticFavProjectsUpdate = (p: Project | undefined) => {
      if (p && existingProject && existingProject?.isFavorite)
        setOptimisticFavProjects({ type: "SAVE", project: p });
    };

    try {
      if (existingProject) {
        optimisticFavProjectsUpdate(projectToSend);
        ({ errors, msg, failed } = await updateProject(projectToSend));
      } else {
        ({ errors, msg, failed } = await addProject(projectToSend));
      }
    } catch (e) {
      console.error("Error occurred: ", e);
    } finally {
      if (msg) toast(msg);
      if (failed) optimisticFavProjectsUpdate(existingProject); //revert

      if (errors) {
        setErrors(errors);
      } else {
        setErrors(undefined);
        router.replace("/projects");
      }
    }
  }

  const getInputVariant = (fieldId: ProjectKeys) =>
    disabledFields?.includes(fieldId) ? "borderless" : "outlined";

  return (
    <Form
      className="w-full h-full flex flex-col gap-2 [@media(min-width:575px)]:gap-4"
      form={form}
      initialValues={
        (existingProject && convertProjectDatesToDayjs(existingProject)) ||
        initialValues
      }
      onFinish={onFinish}
    >
      <StyledFormItem {...getFormItemProps("Project ID", errors)}>
        <Input
          variant={getInputVariant("projectId")}
          minLength={3}
          maxLength={12}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Project Name", errors)}>
        <Input
          variant={getInputVariant("projectName")}
          minLength={1}
          maxLength={12}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Description", errors)}>
        <TextArea
          variant={getInputVariant("description")}
          rows={4}
          minLength={1}
          maxLength={325}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Start Date", errors)}>
        <DatePicker
          variant={getInputVariant("startDate")}
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          placeholder={""}
          format={dateFormat}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("End Date", errors)}>
        <DatePicker
          variant={getInputVariant("endDate")}
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          placeholder={""}
          format={dateFormat}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Project Manager", errors)}>
        <Input
          variant={getInputVariant("projectManager")}
          minLength={1}
          maxLength={16}
          autoComplete={"off"}
        />
      </StyledFormItem>
      {buttons} {/* EDIT, CREATE, UPDATE, BACK buttons */}
    </Form>
  );
};

export default ProjectForm;
