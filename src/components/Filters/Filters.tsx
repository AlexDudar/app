import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import { Col, SortIcon, Title } from "./styles";

export type TFilters = {
  handleClick: (field: string) => void;
  field: string;
  label: string;
  wide?: boolean;
};

const Filters = ({ handleClick, field, label, wide }: TFilters) => {
  return (
    <>
      <Col wide={wide}>
        <Title>{label}</Title>
        <SortIcon onClick={() => handleClick(field)}>
          <AiFillCaretDown />
        </SortIcon>
        <SortIcon onClick={() => handleClick(field)}>
          <AiFillCaretUp />
        </SortIcon>
      </Col>
    </>
  );
};

export default Filters;
