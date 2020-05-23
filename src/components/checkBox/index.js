import React from "react";
import propTypes from "prop-types";
import {
  Icon,
  StyledCheckbox,
  HiddenCheckbox,
  CheckBoxWrapper,
  CheckboxContainer,
  IndeterminateIcon
} from "./styles";

const CustomCheckBox = ({
  label,
  checked,
  disabled,
  color,
  margin,
  selector,
  indeterminate,
  ...props
}) => (
  <CheckBoxWrapper data-selector={selector} disabled={disabled} margin={margin}>
    <CheckboxContainer>
      <HiddenCheckbox
        data-selector={selector}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <StyledCheckbox
        data-selector={selector}
        disabled={disabled}
        checked={checked}
        color={color}
      >
        {indeterminate ? (
          <IndeterminateIcon />
        ) : (
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        )}
      </StyledCheckbox>
    </CheckboxContainer>

    {label}
  </CheckBoxWrapper>
);

CustomCheckBox.propTypes = {
  checked: propTypes.bool,
  onChange: propTypes.func
};

CustomCheckBox.defaultProps = {
  indeterminate: false,
  checked: false,
  onChange: () => {}
};

export default CustomCheckBox;
