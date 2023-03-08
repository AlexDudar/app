import styled from "styled-components";

import { mq } from "../../styles/mediaQueries";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  margin: 1rem;
  width: 100%;
`;

export const Item = styled.div`
  box-shadow: 0 2.8px 2.2px rgb(30 128 177 / 2%),
    0 6.7px 5.3px rgb(30 128 177 / 2%), 0 12.5px 10px rgb(30 128 177 / 3%),
    0 22.3px 17.9px rgb(30 128 177 / 4%), 0 41.8px 33.4px rgb(30 128 177 / 4%),
    0 100px 80px rgb(30 128 177 / 6%);
  border: 2px solid;
  border-image-source: linear-gradient(
    45deg,
    ${colors.afternoonBlue},
    ${colors.lightmorningBlue}
  );
  border-image-slice: 1;
  display: flex;
  padding: 1.2rem 1rem;
  margin: 0.4rem 0;

  @media (${mq.tablet}) {
    align-items: center;
    flex-direction: row;
  }
`;

export const ColContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.5rem 0;
  justify-content: flex-start;

  span {
    margin-right: 5px;
  }

  @media (${mq.tablet}) {
    padding: 0;
    justify-content: center;

    span {
      display: none;
    }
  }
`;

export const Airport = styled.div`
  display: flex;
  flex: 1.2;
  align-items: center;
  padding-bottom: 0.5rem;

  @media (${mq.tablet}) {
    padding: 0;
  }
`;

export const Name = styled.div`
  margin-left: 0;
  font-weight: bold;

  @media (${mq.tablet}) {
    margin-left: 0.5rem;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  width: 100%;

  @media (${mq.tablet}) {
    flex-direction: row;
  }
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;

  @media (${mq.tablet}) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;
