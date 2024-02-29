import { ComponentProps } from "react";

interface Props extends ComponentProps<"thead"> {}

export default function TableHead({ children, ...props }: Props) {
  return <thead {...props}>{children}</thead>;
}
