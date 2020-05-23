import React from "react";
import {
  node,
  bool,
  func,
  shape,
  number,
  string,
  object,
  arrayOf
} from "prop-types";
import CustomSelect from "react-select";
import { withTheme } from "styled-components";

import { Label, customStyles, LabelWrapper, SelectWrapper } from "./styles";

const Selector = ({
  width,
  value,
  theme,
  label,
  options,
  required,
  disabled,
  onChange,
  placeholder,
  defaultValue
}) => {
  return (
    <SelectWrapper label={!!label}>
      {label ? (
        <LabelWrapper>
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        </LabelWrapper>
      ) : null}
      <CustomSelect
        width={width}
        value={value}
        theme={theme}
        options={options}
        onChange={onChange}
        isDisabled={disabled}
        styles={customStyles}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </SelectWrapper>
  );
};

Selector.propTypes = {
  label: node,
  required: bool,
  disabled: bool,
  options: arrayOf(
    shape({
      value: string,
      label: string
    })
  ),
  theme: object.isRequired,
  placeholder: string,
  value: shape({
    value: string,
    label: string
  }),
  onChange: func,
  width: number
};

Selector.defaultProps = {
  options: [],
  simpleValue: true,
  placeholder: ""
};

export default withTheme(Selector);
