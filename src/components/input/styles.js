import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${({ label }) => (label ? "20px" : "10px")};
  width: 100%;
  &:first-child {
    margin-top: 0;
  }
`;

export const LabelWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.14;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.gray};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:after {
    content: "*";
    margin-left: 2px;
    display: ${({ required }) => (required ? "block" : "none")};
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.gray)};
  background-color: ${({ theme, error }) =>
    error ? `${theme.colors.red}25` : theme.colors.white};
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.main};
  }
`;

export const InputComponent = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  margin: 0;
  flex: 1;
  border-radius: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.black};
  background-color: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
