import { List } from "antd";
import { StyledList } from "../FavProjectsSideBarStyles";
import NavigateButton from "../../Buttons/NavigateButton/NavigateButton";
import { FavoritesData } from "@/app/_types/types";

const FavProjectsList = ({
  optimisticFavProjects,
}: {
  optimisticFavProjects: FavoritesData;
}) => {
  return (
    <StyledList
      size="small"
      header={<div>Favorite Projects</div>}
      dataSource={Object.keys(optimisticFavProjects)}
      renderItem={(item) => {
        const projectId = item as keyof typeof optimisticFavProjects;

        return (
          <List.Item>
            <NavigateButton
              path={`/projects/${projectId}`}
              text={optimisticFavProjects[projectId]}
              typeOverride="text"
            />
          </List.Item>
        );
      }}
    />
  );
};

export default FavProjectsList;
