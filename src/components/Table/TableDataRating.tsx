import { randomUUID } from "node:crypto";
import { ComponentProps } from "react";
import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa6";

interface Props extends ComponentProps<"td"> {
  rating: number;
}

export default function TableDataRating({ className = "", rating, ...props }: Readonly<Props>) {
  const stars: IconType[] = new Array(Math.floor(rating)).fill(FaStar);

  return (
    <td {...props} className={`${className} hidden sm:table-cell`.trim()}>
      {stars.map((Star) => (
        <span key={randomUUID()} className="inline-flex">
          <Star />
        </span>
      ))}
    </td>
  );
}
