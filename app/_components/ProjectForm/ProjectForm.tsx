"use client";

import { FormProject, Project, StringMap } from "@/app/_types/types";
import { addProject, updateProject } from "@/app/_actions/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProjectsContext } from "@/app/_contexts/ProjectsContext/useProjectsContext";
import toast from "react-hot-toast";
import { convertProjectDatesToString } from "./ProjectFormUtils";
import { ProjectFormProps } from "./ProjectFormTypes";
import FormContent from "./FormContent/FormContent";

const ProjectForm = ({
  existingProject,
  buttons,
  disabledFields,
}: ProjectFormProps) => {
  const { setOptimisticFavProjects } = useProjectsContext();
  const [errors, setErrors] = useState<StringMap | undefined>(undefined);
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

  return (
    <FormContent
      errors={errors}
      buttons={buttons}
      onFinish={onFinish}
      disabledFields={disabledFields}
      existingProject={existingProject}
    />
  );
};

export default ProjectForm;
