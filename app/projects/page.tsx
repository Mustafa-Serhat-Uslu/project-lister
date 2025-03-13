"use client";

import ProjectsTable from "../_components/ProjectsTable/ProjectsTable";
import NavigateButton from "../_components/Buttons/NavigateButton/NavigateButton";

const ProjectsPage = () => {
  return (
    <main className="flex flex-col items-end w-full mr-8 gap-6 pt-10 ">
      <NavigateButton
        path={"/projects/new"}
        text={"Create Project"}
        styleOverride={"w-32"}
      />
      <ProjectsTable />
    </main>
  );
};

export default ProjectsPage;
