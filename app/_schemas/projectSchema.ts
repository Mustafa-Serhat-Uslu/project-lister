import { z } from "zod";

export const ProjectSchema = z
  .object({
    projectId: z
      .string()
      .min(3, "Project ID cannot be less than 3 characters")
      .max(12, "ProjectId cannot exceed 12 characters")
      .regex(/^\S*$/, "Project ID cannot contain whitespace")
      .regex(
        /^[a-zA-Z0-9_]*$/,
        "Project ID can only contain alphanumeric characters and underscores"
      ),
    projectName: z
      .string()
      .min(1, "Project name is required")
      .max(12, "Project name cannot exceed 12 characters"),
    description: z
      .string()
      .min(1, "Description is required")
      .max(325, "Description cannot exceed 325 characters"),
    startDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Start date must be in YYYY-MM-DD format")
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid start date",
      }),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "End date must be in YYYY-MM-DD format")
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid end date",
      }),
    projectManager: z
      .string()
      .min(1, "Project manager is required")
      .max(16, "Project manager name cannot exceed 16 characters"),
  })
  .refine((data) => new Date(data.endDate) > new Date(data.startDate), {
    message: "End date must be greater than start date",
    path: ["endDate"],
  });
