"use client";

import ProjectsTable from "../_components/ProjectsTable/ProjectsTable";
import RedirectToNew from "../_components/Buttons/RedirectToNew/RedirectToNew";

const ProjectsPage = () => {
  return (
    <main className="flex flex-col items-end w-full mr-8 gap-6 pt-10 ">
      <RedirectToNew />
      <ProjectsTable />
    </main>
  );
};

export default ProjectsPage;
