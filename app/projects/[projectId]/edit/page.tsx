"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProject } from "@/app/_actions/actions";
import { Project } from "@/app/_types/types";
import UpdateButton from "@/app/_components/Buttons/Update/UpdateButton";
import ProjectForm from "@/app/_components/ProjectForm/ProjectForm";
import Loading from "@/app/loading";

export default function ProjectEditPage(): React.JSX.Element {
  const params = useParams<{ projectId: string }>();

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProject() {
      const projectData: Project = await getProject(params.projectId);
      setProject(projectData);
    }
    fetchProject();
  }, [params.projectId]);

  if (!project) return <Loading />;

  return (
    <main className="ProjectEditPage w-full h-full pt-16 pl-0 max-w-3xl md:p-16  ">
      <ProjectForm
        existingProject={project}
        disabledFields={["projectId"]}
        buttons={
          <div className="max-w-md flex justify-center mt-12 gap-5">
            <UpdateButton />
          </div>
        }
      />
    </main>
  );
}
