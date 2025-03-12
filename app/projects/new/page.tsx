"use client"; //TODO: rethink architecture for form.item
import CreateNewProject from "@/app/_components/Buttons/CreateNewProject/CreateNewProject";
import ProjectGrid from "@/app/_components/ProjectLayout/ProjectLayout";
import { Form } from "antd";

export default function NewProjectPage() {
  return (
    <main className="w-full h-full pt-16 max-w-3xl  md:p-16">
      <ProjectGrid
        existingProject={undefined}
        buttons={
          <Form.Item
            label={null}
            className="max-w-md flex justify-center mt-12"
          >
            <CreateNewProject />
          </Form.Item>
        }
      />
    </main>
  );
}
