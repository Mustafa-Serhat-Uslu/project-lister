"use client";

import { Project } from "@/app/_types/types";
import FormItem from "./ProjectContent/FormItem";
import { Form } from "antd";

//TODO: use mapping
const ProjectLayout = ({
  project,
  buttons,
}: {
  project: Project | undefined;
  buttons: React.JSX.Element;
}) => {
  return (
    <Form className="w-full h-full flex flex-col gap-4 ">
      <FormItem
        label={"Project ID"}
        inputType={"textInput"}
        existingContent={project?.projectManager}
      />
      <FormItem
        label={"Project Name"}
        inputType={"textInput"}
        existingContent={project?.projectName}
      />
      <FormItem
        label={"Description"}
        inputType={"textArea"}
        existingContent={project?.description}
      />
      <FormItem
        label={"Start Date"}
        inputType={"datePicker"}
        existingContent={project?.startDate}
      />
      <FormItem
        label={"End Date"}
        inputType={"datePicker"}
        existingContent={project?.endDate}
      />
      <FormItem
        label={"Project Manager"}
        inputType={"textInput"}
        existingContent={project?.projectManager}
      />
      {buttons}
    </Form>
  );
};

export default ProjectLayout;
