"use client";

import { getProject } from "@/app/_actions/actions";
import FavButton from "@/app/_components/Buttons/FavButton/FavButton";
import GoBackButton from "@/app/_components/Buttons/GoBackButton/GoBackButton";
import GoToEditButton from "@/app/_components/Buttons/GoToEditButton/GoToEditButton";
import ProjectGrid from "@/app/_components/ProjectLayout/ProjectLayout";
import { Project } from "@/app/_types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailsPage(): JSX.Element {
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
