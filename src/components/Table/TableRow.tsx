import { ComponentProps } from "react";

interface Props extends ComponentProps<"tr"> {}

export default function TableRow({ children, ...props }: Props) {
  return <tr {...props}>{children}</tr>;
}
