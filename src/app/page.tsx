import Table from "@/components/Table";
import reservations from "@/data/reservations";
import { SlOptionsVertical } from "react-icons/sl";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-white">
      <Table.Root className="m-auto table-auto border-collapse shadow sm:w-[calc(600rem/16)] sm:overflow-hidden sm:rounded-lg lg:w-[calc(800rem/16)] xl:w-[calc(1200rem/16)]">
        <Table.Head className="hidden sm:table-header-group">
          <Table.Row className="row rounded-lg border-b bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500">
            <Table.HeadItem colTitle="car" />
            <Table.HeadItem colTitle="next reservation" />
            <Table.HeadItem colTitle="status" />
            <Table.HeadItem colTitle="rating" />
            <Table.HeadItem colTitle="actions" />
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {reservations.map(({ id, ...r }) => (
            <Table.Row key={id} className="row row-body border-b text-sm">
              <Table.DataCar className="sm:text-gray-900" carName={r.car} imgSrc={r.photo} />
              <Table.MobileGroupData carName={r.car} rating={r.rating} reservation={r.nextReservation} />
              <Table.DataReservation className="sm:text-gray-500" reservation={r.nextReservation} />
              <Table.DataStatus className="sm:text-xs sm:font-medium" status={r.status} />
              <Table.DataRating rating={r.rating} />
              <Table.DataAction Icon={SlOptionsVertical} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </main>
  );
}
