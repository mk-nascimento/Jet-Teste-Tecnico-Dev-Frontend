import { ComponentProps } from "react";

interface Props extends ComponentProps<"tbody"> {}

export default function TableBody({ children, ...props }: Props) {
  return <tbody {...props}>{children}</tbody>;
}
