import styled from "styled-components";

import { mq } from "../../styles/mediaQueries";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Logo = styled.div`
  color: ${colors.seebuyflyYellow};
  text-transform: uppercase;
  font-style: italic;
  padding: 1rem 1rem 0;
  font-size: 2rem;
  font-family: "Monoton";

  @media (${mq.tablet}) {
    font-size: 3.5rem;
    padding: 2.2rem 1.4rem 0;
  }
`;

export const Promo = styled.div`
  font-size: 1rem;

  @media (${mq.tablet}) {
    font-size: 1.2rem;
  }
`;
