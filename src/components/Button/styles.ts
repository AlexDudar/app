import styled, { css } from "styled-components";

import { colors } from "../../styles/colors";

export const ButtonContainer = styled.a<{ href: string; type: string }>`
  color: ${colors.white};
  display: inline-block;
  padding: 0.3rem 0.5rem;
  text-align: center;
  text-decoration: none;

  ${(props) =>
    props.type === "button" &&
    css`
      min-width: 100px;
      background-color: transparent;
      border: 2px solid;
      border-image-source: linear-gradient(
        120deg,
        ${colors.duskBlue},
        ${colors.lightmorningBlue}
      );
      border-image-slice: 1;
      transition: color 0.3s ease, box-shadow 0.3s ease,
        background-position 0.3s ease;

      &:hover {
        color: ${colors.duskBlue};
        border-image-source: linear-gradient(
          120deg,
          ${colors.lightmorningBlue},
          ${colors.duskBlue}
        );
        transition: color 0.2s ease, box-shadow 0.2s ease,
          border-image-source 0.2s ease;
      }
    `}
`;
