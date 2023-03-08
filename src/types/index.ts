export interface TFlights {
  flights: TFlight[];
  handleChange?: (value: string) => void;
}

export interface TFlight {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  date: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
}

export type TSortBy = {
  field: string;
  order: string;
};
