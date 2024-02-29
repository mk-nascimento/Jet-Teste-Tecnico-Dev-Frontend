import { ReactNode } from "react";

export interface CarReservation {
  id: number;
  photo: string;
  car: string;
  nextReservation: string;
  status: string;
  rating: number;
}

export interface ReactChildren {
  children: ReactNode;
}
