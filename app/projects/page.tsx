"use client";

import { Button } from "antd";
import ProjectsTable from "../_components/ProjectsTable/ProjectsTable";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-end w-full mr-8 gap-6 pt-10 ">
      <Button
        className="rounded-none w-32 scale-100"
        type="primary"
        onClick={() => console.log("first")}
      >
        Create Project
      </Button>

      <ProjectsTable />
    </div>
  );
};

export default ProjectsPage;
