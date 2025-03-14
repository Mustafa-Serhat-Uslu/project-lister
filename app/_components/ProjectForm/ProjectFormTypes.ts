import {
  FormProject,
  Project,
  ProjectKeys,
  StringMap,
} from "@/app/_types/types";

export type ProjectFormProps = {
  existingProject?: Project | undefined;
  buttons: React.JSX.Element;
  disabledFields?: ProjectKeys[];
};

export type FormContentProps = ProjectFormProps & {
  errors: StringMap | undefined;
  onFinish: (project: FormProject) => Promise<void>;
};
