import { useEffect, useState } from "react";
import { getProjects } from "@/app/_actions/actions";
import { Project } from "@/app/_types/types";
import Loading from "@/app/loading";
import toast from "react-hot-toast";
import TableContent from "./TableContent/TableContent";
import { useWindowWidth } from "@/app/_utils/hooks/useWindowSize";

const EXTRA_SPACE = 250;

const ProjectsTable = () => {
  const windowWidth = useWindowWidth();
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: projects, msg } = await getProjects();
      if (projects) {
        setData(projects);
        return;
      }
      if (msg) toast(msg);
    };

    fetchData();
  }, []);

  if (!data) return <Loading />;

  return <TableContent data={data} width={windowWidth - EXTRA_SPACE} />;
};

export default ProjectsTable;
