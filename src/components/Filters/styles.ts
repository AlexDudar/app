import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Col = styled.div<{ wide?: boolean }>`
  display: flex;
  flex: ${(props) => (props.wide ? 1.2 : 1)};
  font-weight: bold;
  justify-content: center;
`;

export const Title = styled.div`
  margin-right: 0.15rem;
`;

export const SortIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    color: ${colors.seebuyflyYellow};
    cursor: pointer;
  }
`;
