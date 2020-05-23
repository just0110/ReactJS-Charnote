import styled, { css } from "styled-components";

export const CheckBoxWrapper = styled.label`
  display: flex;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.black};
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5em;
  height: 0em;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const checkedEnabledStyle = css`
  background: ${({ theme }) => theme.colors.main};
  border: solid 1px transparent;
  cursor: pointer;

  ${Icon} {
    visibility: visible;
  }
`;
const uncheckEnabledStyle = css`
  background: #fff;
  border: solid 1px #a0a4a8;
  cursor: pointer;

  ${HiddenCheckbox}:hover + & {
    background-color: #ccc;
  }

  ${Icon} {
    visibility: hidden;
  }
`;

const checkedDisabledStyle = css`
  background: #dadada;
  border: solid 1px transparent;

  ${Icon} {
    visibility: visible;
  }
`;
const uncheckDisabledStyle = css`
  background: #fff;
  border: solid 1px #dadada;

  ${Icon} {
    visibility: hidden;
  }
`;

const disabledStyle = css`
  ${({ checked }) => (checked ? checkedDisabledStyle : uncheckDisabledStyle)};
`;

const enabledStyle = css`
  ${({ checked }) => (checked ? checkedEnabledStyle : uncheckEnabledStyle)};
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 100ms;

  ${({ disabled }) => (disabled ? disabledStyle : enabledStyle)};
`;

export const IndeterminateIcon = styled.div`
  width: 15px;
  height: 15px;
  background-color: #a0a4a8;
  border-radius: 3px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    width: 9px;
    height: 2px;
    transform: translate(-50%, -50%);
  }
`;
