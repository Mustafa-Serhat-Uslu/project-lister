import Link from "next/link";
import { Button } from "antd";
import { ButtonType } from "antd/es/button";

const NavigateButton = ({
  path,
  text,
  styleOverride,
  typeOverride,
}: {
  path: string;
  text: string;
  styleOverride?: string;
  typeOverride?: ButtonType;
}) => {
  return (
    <Link href={path}>
      <Button
        type={typeOverride || "primary"}
        className={
          typeOverride === "text"
            ? ""
            : `rounded-none w-24 scale-75 md:scale-100 ${styleOverride}`
        }
      >
        {text}
      </Button>
    </Link>
  );
};

export default NavigateButton;
