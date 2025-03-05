import { Button } from "antd";
import Link from "next/link";

const CreateProjectButton = ({ text }: { text?: string }) => {
  return (
    <Link href={`/projects/new`}>
      <Button
        className="rounded-none w-32 scale-75 md:scale-100"
        type="primary"
      >
        {text ?? "Create Project"}
      </Button>
    </Link>
  );
};

export default CreateProjectButton;
