import { ComponentProps } from "react";

interface Props extends ComponentProps<"table"> {}

export default function TableRoot({ children, ...props }: Props) {
  return <table {...props}>{children}</table>;
}
