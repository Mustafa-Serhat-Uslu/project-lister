import { Form } from "antd";
import styled from "styled-components";
import { InputPickerTypes, ProjectKeys } from "@/app/_types/types";
import InputPicker from "./InputPicker/InputPicker";
import { toCamelCase } from "@/app/_utils/_functions/toCamelCase";

type FormItemProps = {
  label: string;
  isEditAllowed?: boolean; //TODO: ? is needed?
} & InputPickerTypes;

const FormItem = ({ label, inputType, existingContent }: FormItemProps) => {
  const dataKey: ProjectKeys = toCamelCase(label);

  return (
    <StyledFormItem
      name={dataKey}
      label={label}
      rules={[{ required: true, message: "Please fill!" }]}
    >
      <InputPicker inputType={inputType} existingContent={existingContent} />
    </StyledFormItem>
  );
};

export default FormItem;

const StyledFormItem = styled(Form.Item)`
  .ant-row {
    gap: 1.3rem;

    .ant-col {
      width: 8rem; //TODO: may need recheck

      label {
        &::before,
        &::after {
          content: none !important;
        }
      }

      input,
      textarea,
      .ant-picker {
        border-radius: 0;
        border-color: black;
        border-width: 0.08rem;
      }

      textarea {
        width: 24rem;
        height: 10rem;
      }

      input,
      .ant-picker {
        width: 10rem;
      }
    }
  }
`;
