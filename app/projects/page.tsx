"use client";

import ProjectsTable from "../_components/ProjectsTable/ProjectsTable";
import CreateProjectButton from "../_components/Buttons/CreateProject/CreateProjectButton";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-end w-full mr-8 gap-6 pt-10 ">
      <CreateProjectButton />
      <ProjectsTable />
    </div>
  );
};

export default ProjectsPage;
