import FavButton from "../../Buttons/FavButton/FavButton";
import GoToEditButton from "../../Buttons/GoToEditButton/GoToEditButton";

const TableRowActions = ({ projectId }: { projectId: string }) => {
  return (
    <div className="flex items-stretch w-full justify-end pr-2">
      <FavButton projectId={projectId} />
      <GoToEditButton projectId={projectId} />
    </div>
  );
};

export default TableRowActions;
