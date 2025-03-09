import { Button } from "antd";
import Link from "next/link";

const GoToProjectDetailsButton = ({
  projectId,
  text,
}: {
  projectId: string;
  text: string;
}) => {
  return (
    <Link href={`/projects/${projectId}`}>
      <Button type="text">{text}</Button>
    </Link>
  );
};

export default GoToProjectDetailsButton;
