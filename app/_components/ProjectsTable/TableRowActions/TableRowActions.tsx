import { Project } from "@/app/_types/types";
import FavButton from "../../Buttons/FavButton/FavButton";
import NavigateButton from "../../Buttons/NavigateButton/NavigateButton";

const TableRowActions = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-stretch w-full justify-end pr-2 scale-[.6] sm:scale-75  md:scale-90 lg:scale-100">
      <FavButton project={project} />
      <NavigateButton
        path={`/projects/${project.projectId}/edit`}
        text="Edit"
      />
    </div>
  );
};

export default TableRowActions;
