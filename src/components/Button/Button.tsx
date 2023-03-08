import React from "react";

import { ButtonContainer } from "./styles";

export interface ButtonProps {
  title: string;
  url: string;
  type?: "link" | "button";
  target?: boolean;
}

const Button = ({ title, url, type = "link", target }: ButtonProps) => {
  return (
    <ButtonContainer
      href={url}
      type={type}
      target={target ? "_blank" : "_self"}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
