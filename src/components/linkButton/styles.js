import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  background: transparent;
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors.main}` : "none"};
  border-radius: 2em;
  height: fit-content;
  color: ${({ color, theme }) => (color ? color : theme.colors.main)};
  cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};
  outline-width: 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.14;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)}

  &:hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.7")};
  }
`;

export const Plus = styled.div`
  display: ${({ plus }) => (plus ? "flex" : "none")};
  font-size: 1rem;
  margin-right: 0.3em;
`;
