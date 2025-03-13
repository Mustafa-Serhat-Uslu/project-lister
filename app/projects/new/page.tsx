"use client";

import SubmitButton from "@/app/_components/Buttons/SubmitButton/SubmitButton";
import ProjectForm from "@/app/_components/ProjectForm/ProjectForm";
import { Form } from "antd";

export default function NewProjectPage() {
  return (
    <main className="w-full h-full pt-16 max-w-3xl md:p-16">
      <ProjectForm
        existingProject={undefined}
        buttons={
          <Form.Item
            label={null}
            className="max-w-md flex justify-center mt-12"
          >
            <SubmitButton text={"Create"} />
          </Form.Item>
        }
      />
    </main>
  );
}
