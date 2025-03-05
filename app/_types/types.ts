export type Project = {
  projectId: string;
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  projectManager: string;
};

export type ProjectKeys = keyof Project;

export type InputPickerTypes = {
  inputType: "textInput" | "textArea" | "datePicker";
  existingContent: string | undefined;
};
