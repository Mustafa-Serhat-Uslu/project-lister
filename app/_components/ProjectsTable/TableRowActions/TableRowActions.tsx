import { Project } from "@/app/_types/types";
import FavButton from "../../Buttons/FavButton/FavButton";
import GoToEditButton from "../../Buttons/GoToEditButton/GoToEditButton";

const TableRowActions = ({
  projectId,
  isFavorite,
}: {
  projectId: Project["projectId"];
  isFavorite: Project["isFavorite"];
}) => {
  return (
    <div className="flex items-stretch w-full justify-end pr-2">
      <FavButton projectId={projectId} isFavorite={isFavorite} />
      <GoToEditButton projectId={projectId} />
    </div>
  );
};

export default TableRowActions;
