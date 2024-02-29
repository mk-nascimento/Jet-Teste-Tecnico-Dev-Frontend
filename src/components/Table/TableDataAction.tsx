import { ComponentProps } from "react";
import { IconType } from "react-icons";

interface Props extends ComponentProps<"td"> {
  Icon: IconType;
}

export default function TableDataAction({ className = "", Icon, ...props }: Readonly<Props>) {
  return (
    <td {...props} className={`${className}`.trim()}>
      <Icon className="inline-flex justify-center" />
    </td>
  );
}
