import { Button } from "antd";
import Link from "next/link";
import React from "react";

const EditButton = ({ projectId }: { projectId: string }) => {
  return (
    <Link href={`/projects/${projectId}/edit`}>
      <Button
        type="primary"
        className="rounded-none w-20 scale-75 md:scale-100"
      >
        Edit
      </Button>
    </Link>
  );
};

export default EditButton;
