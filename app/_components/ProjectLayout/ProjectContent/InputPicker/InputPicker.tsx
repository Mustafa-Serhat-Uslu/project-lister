import { InputPickerTypes } from "@/app/_types/types";
import { DatePicker, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";

const InputPicker = ({ inputType, existingContent }: InputPickerTypes) => {
  switch (inputType) {
    case "textInput":
      return <Input placeholder={existingContent} />;

    case "textArea":
      return <TextArea rows={4} placeholder={existingContent} maxLength={6} />;

    case "datePicker": {
      const dateFormat = "YYYY-MM-DD";

      return (
        <DatePicker
          //   defaultValue={dayjs(existingContent, dateFormat)}
          minDate={dayjs("2019-08-01", dateFormat)}
          maxDate={dayjs("2020-10-31", dateFormat)}
        />
      );
    }

    default:
      return null;
  }
};

export default InputPicker;
