import Image from "next/image";
import { ComponentProps } from "react";
import { GoCheckCircleFill } from "react-icons/go";

interface Props extends ComponentProps<"td"> {
  carName: string;
  imgSrc: string;
}

export default function TableDataCar({ carName, imgSrc, ...props }: Readonly<Props>) {
  return (
    <td {...props}>
      <div className="relative inline-flex flex-row items-center gap-2">
        <GoCheckCircleFill className="absolute left-0 top-0 fill-green-600 sm:hidden" size={24} />
        <Image src={imgSrc} alt="Car Picture" height={1000} width={1000} className="h-12 w-12 object-cover" />
        <p className="hidden sm:block">{carName}</p>
      </div>
    </td>
  );
}
