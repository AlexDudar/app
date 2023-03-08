import React from "react";

import { TFlights } from "../../types";
import {
  Item,
  Airport,
  ColContent,
  Name,
  LeftCol,
  RightCol,
  Container,
} from "./styles";

import Button from "../Button";

const Flight = ({ flights }: TFlights) => {
  return (
    <Container>
      {flights.map((item: any) => {
        return (
          <Item key={item.flightIdentifier}>
            <LeftCol>
              <Airport>
                <Name>{item.airport}</Name>
              </Airport>
              <ColContent>
                <span>Date:</span>
                {item.date}
              </ColContent>
              <ColContent>
                <span>Time:</span>
                {item.expectedTime}
              </ColContent>
              <ColContent>
                <span>Flight:</span>
                {item.flightNumber}
              </ColContent>
            </LeftCol>
            <RightCol>
              <Button title="details" url={item.url} type="button" target />
            </RightCol>
          </Item>
        );
      })}
    </Container>
  );
};

export default Flight;
