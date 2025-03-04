import CreateNewProject from "@/app/_components/Buttons/CreateNewProject/CreateNewProject";
import ProjectGrid from "@/app/_components/ProjectLayout/ProjectLayout";
import { Form } from "antd";

export default function NewProjectPage() {
  return (
    <main className="w-full h-full p-16 max-w-3xl ">
      <ProjectGrid
        project={undefined}
        buttons={
          <Form.Item className="max-w-md flex justify-center mt-12">
            <CreateNewProject />
          </Form.Item>
        }
      />
    </main>
  );
}
