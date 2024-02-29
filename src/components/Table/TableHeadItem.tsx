import { ComponentProps } from "react";

interface Props extends ComponentProps<"th"> {
  colTitle: string;
}

export default function TableHeadItem({ colTitle, ...props }: Readonly<Props>) {
  return <th {...props}>{colTitle}</th>;
}
