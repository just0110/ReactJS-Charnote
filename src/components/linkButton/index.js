import React from "react";
import propTypes from "prop-types";

import { Wrapper, Plus } from "./styles";

const LinkButton = ({
  plus,
  style,
  align,
  title,
  border,
  color,
  onClick,
  disabled
}) => {
  return (
    <Wrapper
      border={border}
      style={style}
      onClick={onClick}
      disabled={disabled}
      align={align}
      color={color}
    >
      <Plus plus={plus}>+</Plus>

      {title}
    </Wrapper>
  );
};

LinkButton.propTypes = {
  title: propTypes.string,
  onClick: propTypes.func
};
LinkButton.defaultProps = {
  title: "",
  onClick: () => {}
};

export default LinkButton;
