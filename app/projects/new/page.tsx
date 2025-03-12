"use client"; //TODO: rethink architecture for form.item
import CreateNewProjectButton from "@/app/_components/Buttons/CreateNewProjectButton/CreateNewProjectButton";
import ProjectForm from "@/app/_components/ProjectForm/ProjectForm";
import { Form } from "antd";

export default function NewProjectPage() {
  return (
    <main className="w-full h-full pt-16 max-w-3xl  md:p-16">
      <ProjectForm
        existingProject={undefined}
        buttons={
          <Form.Item
            label={null}
            className="max-w-md flex justify-center mt-12"
          >
            <CreateNewProjectButton />
          </Form.Item>
        }
      />
    </main>
  );
}
