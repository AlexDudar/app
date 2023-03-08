import React, { FC } from "react";

import { Container, Logo, Promo } from "./styles";

const Header: FC = () => {
  return (
    <Container>
      <Logo>Schiphol</Logo>
      <Promo>We move people 🛫</Promo>
    </Container>
  );
};

export default Header;
