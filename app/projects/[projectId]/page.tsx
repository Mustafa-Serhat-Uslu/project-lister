"use client";

import React, { useEffect, useState } from "react";
import { getProject } from "@/app/_actions/actions";
import FavButton from "@/app/_components/Buttons/FavButton/FavButton";
import ProjectForm from "@/app/_components/ProjectForm/ProjectForm";

import { Project } from "@/app/_types/types";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import NavigateButton from "@/app/_components/Buttons/NavigateButton/NavigateButton";

export default function ProjectDetailsPage(): React.JSX.Element {
  const params = useParams<{ projectId: string }>();

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProject() {
      const { data: projectData, msg } = await getProject(params.projectId);

      if (projectData) {
        setProject(projectData);
        return;
      }

      console.error(msg);
    }
    fetchProject();
  }, [params.projectId]);

  if (!project) return <Loading />;

  const allProjectKeys = Object.keys(project) as (keyof Project)[];
  return (
    <main className="ProjectDetailsPage flex w-full h-full pt-16 max-w-3xl pl-0  md:p-16">
      <ProjectForm
        existingProject={project}
        disabledFields={allProjectKeys}
        buttons={
          <div className="max-w-md flex justify-center mt-12 gap-5">
            <NavigateButton path={"/projects"} text={"Back"} />
            <NavigateButton
              path={`/projects/${project.projectId}/edit`}
              text="Edit"
            />
          </div>
        }
      />
      <FavButton project={project} />
    </main>
  );
}
