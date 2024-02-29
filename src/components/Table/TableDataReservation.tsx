import { ComponentProps } from "react";

interface Props extends ComponentProps<"td"> {
  reservation: string;
}

export default function TableDataReservation({ className = "", reservation, ...props }: Readonly<Props>) {
  const _reservation = reservation.split("-");
  return (
    <td {...props} className={`${className} hidden sm:table-cell`.trim()}>{`${_reservation[2]}/${_reservation[1]}`}</td>
  );
}
