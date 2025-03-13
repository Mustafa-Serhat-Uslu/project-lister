import { Button } from "antd";

const SubmitButton = ({ text }: { text: string }) => {
  return (
    <Button
      htmlType="submit"
      type="primary"
      className="rounded-none w-24 scale-75 md:scale-100"
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
