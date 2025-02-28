import EditButton from "../../Buttons/EditButton/EditButton";
import FavButton from "../../Buttons/FavButton/FavButton";

const TableRowActions = ({ projectId }: { projectId: string }) => {
  return (
    <div className="flex items-stretch w-full justify-end pr-2">
      <FavButton projectId={projectId} />
      <EditButton projectId={projectId} />
    </div>
  );
};

export default TableRowActions;
