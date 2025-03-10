import { Project } from "@/app/_types/types";
import FavButton from "../../Buttons/FavButton/FavButton";
import GoToEditButton from "../../Buttons/GoToEditButton/GoToEditButton";

const TableRowActions = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-stretch w-full justify-end pr-2">
      <FavButton project={project} />
      <GoToEditButton projectId={project.projectId} />
    </div>
  );
};

export default TableRowActions;
