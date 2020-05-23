import React from "react";
import { string, func, node } from "prop-types";

import { ButtonWrapper } from "./styles";

const Button = ({ width, title, children, ...props }) => (
  <ButtonWrapper width={width} {...props}>{children || title}</ButtonWrapper>
);

Button.propTypes = {
  onClick: func,
  title: string,
  children: node
};

export default Button;
