import React from "react";
import { string, func, node } from "prop-types";

import { ButtonWrapper } from "./styles";

const Button = ({ title, children, ...props }) => (
  <ButtonWrapper {...props}>{children || title}</ButtonWrapper>
);

Button.propTypes = {
  onClick: func,
  title: string,
  children: node
};

export default Button;
