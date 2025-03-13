import { Project } from "@/app/_types/types";
import FavButton from "../../Buttons/FavButton/FavButton";
import NavigateButton from "../../Buttons/NavigateButton/NavigateButton";

const TableRowActions = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-end  w-full justify-end pr-2 scale-90  md:scale-95 lg:scale-100">
      <FavButton project={project} />
      <NavigateButton
        path={`/projects/${project.projectId}/edit`}
        text="Edit"
      />
    </div>
  );
};

export default TableRowActions;
