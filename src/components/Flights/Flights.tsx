import React, { useState, useEffect } from "react";

import { fetchFlights } from "../../utils/fetchFlights";
import filterByAirport from "../../utils/filterByAirport";
import sortFlights from "../../utils/sortFlights";
import Filters from "../Filters/Filters";

import {
  Container,
  MobileFiltersContainer,
  TableTitle,
  Col,
  Search,
} from "./styles";
import Flight from "../Flight";
import { TFlight, TSortBy } from "../../types";

const Flights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [flights, setFlights] = useState<TFlight[]>([]);
  const [sortedBy, setSortedBy] = useState<TSortBy>({
    field: "date",
    order: "asc",
  });

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetchFlights()
        .then((data) => {
          const results = filterByAirport(data.flights, searchTerm);

          setFlights(results);
        })
        .catch((error) => console.error(error));
    }
  }, [searchTerm]);

  const handleSort = (field: string) => {
    if (sortedBy.field === field) {
      setSortedBy({ field, order: sortedBy.order === "asc" ? "desc" : "asc" });
    } else {
      setSortedBy({ field, order: "asc" });
    }
  };

  const sortedFlights = sortFlights(flights, sortedBy);

  const renderFilters = (
    <>
      <Filters handleClick={handleSort} field="airport" label="Destination" />
      <Filters handleClick={handleSort} field="date" label="Date" />
      <Filters handleClick={handleSort} field="expectedTime" label="Time" />
      <Filters handleClick={handleSort} field="flightNumber" label="Flight" />
    </>
  );

  return (
    <Container>
      <Search>
        <div>Search for your next flight:</div>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Search>

      {!!sortedFlights.length && (
        <MobileFiltersContainer>{renderFilters}</MobileFiltersContainer>
      )}

      {!!sortedFlights.length && (
        <TableTitle>
          {renderFilters}
          <Col></Col>
        </TableTitle>
      )}

      <Flight flights={sortedFlights} />
    </Container>
  );
};

export default Flights;
