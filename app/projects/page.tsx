"use client";

import ProjectsTable from "../_components/ProjectsTable/ProjectsTable";
import RedirectToNewButton from "../_components/Buttons/RedirectToNewButton/RedirectToNewButton";

const ProjectsPage = () => {
  return (
    <main className="flex flex-col items-end w-full mr-8 gap-6 pt-10 ">
      <RedirectToNewButton />
      <ProjectsTable />
    </main>
  );
};

export default ProjectsPage;
