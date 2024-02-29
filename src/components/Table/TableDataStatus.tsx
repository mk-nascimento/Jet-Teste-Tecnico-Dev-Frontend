import { ComponentProps } from "react";

interface Props extends ComponentProps<"td"> {
  status: string;
}

export default function TableDataStatus({ status, ...props }: Readonly<Props>) {
  return (
    <td {...props}>
      <span className="hidden rounded-md bg-green-100 px-2.5 py-0.5 text-center capitalize text-green-800 sm:table-cell">
        {status}
      </span>
    </td>
  );
}
