import { TFlight } from "../types";

const filterByAirport = (items: TFlight[], query: string): TFlight[] => {
  if (query === "") {
    return items;
  }

  return items
    .filter((item) => item.airport.toLowerCase().includes(query))
    .slice(0, 5);
};

export default filterByAirport;
