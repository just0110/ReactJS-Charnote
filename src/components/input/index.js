import React from "react";
import { string, bool, func } from "prop-types";

import {
  Label,
  Container,
  LabelWrapper,
  InputWrapper,
  InputComponent
} from "./styles";

const Input = ({
  type,
  label,
  value,
  error,
  width,
  onChange,
  disabled,
  required,
  placeholder,
  ...props
}) => {
  return (
    <Container width={width} label={label}>
      {label ? (
        <LabelWrapper>
          <Label error={!!error} required={required} disabled={disabled}>
            {label}
          </Label>
        </LabelWrapper>
      ) : null}
      <InputWrapper error={!!error}>
        <InputComponent
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
      </InputWrapper>
    </Container>
  );
};

Input.propTypes = {
  onChange: func.isRequired,
  type: string,
  label: string,
  placeholder: string,
  disabled: bool,
  value: string,
  required: bool
};

Input.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {}
};

export default Input;
