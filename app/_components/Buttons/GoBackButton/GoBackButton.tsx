"use client";

import { Button } from "antd";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <Button
      type="primary"
      className="rounded-none w-20 scale-75 md:scale-100"
      onClick={() => router.back()}
    >
      Back
    </Button>
  );
};

export default GoBackButton;
