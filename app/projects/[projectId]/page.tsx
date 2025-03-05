"use client";

import FavButton from "@/app/_components/Buttons/FavButton/FavButton";
import GoToEditButton from "@/app/_components/Buttons/GoToEditButton/GoToEditButton";
import ProjectGrid from "@/app/_components/ProjectLayout/ProjectLayout";
import { Project } from "@/app/_types/types";
import { useParams } from "next/navigation";

export default function ProjectDetailsPage(): JSX.Element {
  const params = useParams<{ projectId: string }>();

  return (
    <main className=" flex w-full h-full p-16 max-w-3xl ">
      <ProjectGrid
        project={dummyProject}
        buttons={
          <div className="max-w-md flex justify-center mt-12">
            <GoToEditButton projectId={params.projectId} />
          </div>
        }
      />
      <FavButton projectId={dummyProject.id} />
    </main>
  );
}

const dummyProject: Project = {
  id: "someProjectId",
  name: "some Project",
  description:
    "someloolwnsvnw;svn'owjNV;owjn'ljkwNFD'LKnda'kcn'wlKN'Lknwv'kn'FLKN'qkjenf 'l DV'LN'owb'oj qeeqf'lm oong desc",
  endDate: "2021-11-11",
  startDate: "2021-11-11",
  manager: "not me",
};
