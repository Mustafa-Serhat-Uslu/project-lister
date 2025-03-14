"use client";

import * as React from "react";
import { DatePicker, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import {
  convertProjectDatesToDayjs,
  dateFormat,
  getFormItemProps,
  initialValues,
} from "../ProjectFormUtils";
import { ProjectKeys } from "@/app/_types/types";
import { FormContentProps } from "../ProjectFormTypes";
import { StyledFormItem } from "../ProjectFormStyles";

const FormContent = ({
  buttons,
  disabledFields,
  existingProject,
  errors,
  onFinish,
}: FormContentProps) => {
  const [form] = Form.useForm();

  const getInputVariant = (fieldId: ProjectKeys) =>
    disabledFields?.includes(fieldId) ? "borderless" : "outlined";

  return (
    <Form
      className="w-full h-full flex flex-col gap-2 [@media(min-width:575px)]:gap-4"
      form={form}
      initialValues={
        (existingProject && convertProjectDatesToDayjs(existingProject)) ||
        initialValues
      }
      onFinish={onFinish}
    >
      <StyledFormItem {...getFormItemProps("Project ID", errors)}>
        <Input
          variant={getInputVariant("projectId")}
          minLength={3}
          maxLength={12}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Project Name", errors)}>
        <Input
          variant={getInputVariant("projectName")}
          minLength={1}
          maxLength={12}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Description", errors)}>
        <TextArea
          variant={getInputVariant("description")}
          rows={4}
          minLength={1}
          maxLength={325}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Start Date", errors)}>
        <DatePicker
          variant={getInputVariant("startDate")}
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          placeholder={""}
          format={dateFormat}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("End Date", errors)}>
        <DatePicker
          variant={getInputVariant("endDate")}
          minDate={dayjs("2000-01-01", dateFormat)}
          maxDate={dayjs("2050-12-31", dateFormat)}
          placeholder={""}
          format={dateFormat}
          autoComplete={"off"}
        />
      </StyledFormItem>
      <StyledFormItem {...getFormItemProps("Project Manager", errors)}>
        <Input
          variant={getInputVariant("projectManager")}
          minLength={1}
          maxLength={16}
          autoComplete={"off"}
        />
      </StyledFormItem>
      {buttons} {/* EDIT, CREATE, UPDATE, BACK buttons */}
    </Form>
  );
};

export default FormContent;
