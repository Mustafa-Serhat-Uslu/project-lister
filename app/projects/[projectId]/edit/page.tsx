"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProject } from "@/app/_actions/actions";
import { Project } from "@/app/_types/types";
import UpdateButton from "@/app/_components/Buttons/Update/UpdateButton";
import ProjectGrid from "@/app/_components/ProjectLayout/ProjectLayout";

export default function ProjectEditPage(): JSX.Element {
  const params = useParams<{ projectId: string }>();

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProject() {
      const projectData: Project = await getProject(params.projectId);
      setProject(projectData);
    }
    fetchProject();
  }, [params.projectId]);

  //TODO: Loading for the layout
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <main className="ProjectEditPage w-full h-full pt-16 pl-0 max-w-3xl md:p-16  ">
      <ProjectGrid
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
