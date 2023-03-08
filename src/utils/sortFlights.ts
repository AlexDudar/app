import { TFlight, TSortBy } from "../types";

const sortFlights = (flights: TFlight[], sortedBy: TSortBy): TFlight[] => {
  return flights.sort((a: TFlight, b: TFlight) => {
    const field = sortedBy.field as keyof TFlight;

    const aValue = a[field];
    const bValue = b[field];

    if (aValue < bValue) {
      return sortedBy.order === "asc" ? -1 : 1;
    } else if (aValue > bValue) {
      return sortedBy.order === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });
};

export default sortFlights;
