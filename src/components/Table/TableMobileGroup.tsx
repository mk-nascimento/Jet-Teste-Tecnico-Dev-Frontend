import { randomUUID } from "node:crypto";
import { ComponentProps } from "react";
import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa6";

interface Props extends ComponentProps<"td"> {
  carName: string;
  rating: number;
  reservation: string;
}

export default function TableDataMobileGroup({
  className = "",
  carName,
  reservation,
  rating,
  ...props
}: Readonly<Props>) {
  const stars: IconType[] = new Array(Math.floor(rating)).fill(FaStar);
  const _reservation = reservation.split("-");

  return (
    <td {...props} className={`${className} sm:hidden`.trim()}>
      <div>
        <p className="font-semibold text-gray-900">{carName}</p>
        <p className="text-xs text-gray-500">{`Next reservation: ${_reservation[2]}/${_reservation[1]}`}</p>
        <p>
          {stars.map((Star) => (
            <span key={randomUUID()} className="inline-flex">
              <Star />
            </span>
          ))}
        </p>
      </div>
    </td>
  );
}
