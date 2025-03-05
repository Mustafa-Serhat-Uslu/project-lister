//TODO: server or client?

import GoBackButton from "@/app/_components/Buttons/GoBackButton/GoBackButton";
import UpdateButton from "@/app/_components/Buttons/Update/UpdateButton";
import ProjectGrid from "@/app/_components/ProjectLayout/ProjectLayout";

export default async function ProjectEditPage({
  params,
}: {
  params: { projectId: string };
}): Promise<JSX.Element> {
  console.log(params.projectId);

  return (
    <main className="w-full h-full p-16 max-w-3xl ">
      <ProjectGrid
        project={undefined}
        buttons={
          <div className="max-w-md flex justify-center mt-12">
            <UpdateButton />
            <GoBackButton />
          </div>
        }
      />
    </main>
  );
}
