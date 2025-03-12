"use client";

import React, { useEffect, useState } from "react";
import { getProject } from "@/app/_actions/actions";
import FavButton from "@/app/_components/Buttons/FavButton/FavButton";
import GoBackButton from "@/app/_components/Buttons/GoBackButton/GoBackButton";
import GoToEditButton from "@/app/_components/Buttons/GoToEditButton/GoToEditButton";
import ProjectGrid from "@/app/_components/ProjectLayout/ProjectLayout";
import { Project } from "@/app/_types/types";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";

export default function ProjectDetailsPage(): React.JSX.Element {
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

  const allProjectKeys = Object.keys(project) as (keyof Project)[];
  return (
    <main className="ProjectDetailsPage flex w-full h-full pt-16 max-w-3xl pl-0  md:p-16">
      <ProjectGrid
        existingProject={project}
        disabledFields={allProjectKeys}
        buttons={
          <div className="max-w-md flex justify-center mt-12 gap-5">
            <GoBackButton />
            <GoToEditButton projectId={params.projectId} />
          </div>
        }
      />
      <FavButton project={project} />
    </main>
  );
}
