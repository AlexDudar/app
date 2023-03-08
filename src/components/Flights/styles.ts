import styled from "styled-components";

import { mq } from "../../styles/mediaQueries";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  align-items: center;
  display: flex;
  max-width: 1080px;
  margin: 3rem auto;
  flex-wrap: wrap;
  width: 100%;
`;

export const Col = styled.div<{ wide?: boolean }>`
  display: flex;
  flex: ${(props) => (props.wide ? 1.2 : 1)};
  font-weight: bold;
`;

export const TableTitle = styled.div`
  display: none;
  padding: 0.2rem 1rem;
  margin-top: 0.6rem;
  width: 100%;

  @media (${mq.tablet}) {
    display: flex;
  }
`;

export const MobileFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${Col} {
    flex: inherit;
    margin: 0 1.5rem;
  }

  @media (${mq.tablet}) {
    display: none;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;

  input {
    background: ${colors.lightBlack};
    color: ${colors.white};
    box-shadow: 0 2.8px 2.2px rgb(30 128 177 / 2%),
      0 6.7px 5.3px rgb(30 128 177 / 2%), 0 12.5px 10px rgb(30 128 177 / 3%),
      0 22.3px 17.9px rgb(30 128 177 / 4%), 0 41.8px 33.4px rgb(30 128 177 / 4%),
      0 100px 80px rgb(30 128 177 / 6%);
    border: 2px solid;
    border-image-source: ${colors.gradientFlights};
    border-image-slice: 1;
    display: flex;
    padding: 0.4rem 0.3rem;
    margin: 0.4rem 0 0.4rem 0;
    min-width: 14rem;
  }
`;
