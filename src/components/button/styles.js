import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 2em;
  cursor: pointer;
  outline: 0;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.66 : 1)};
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.secondaryA}, ${theme.colors.secondaryLightA});`};
  padding: 9px 30px;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  box-shadow: 2px 5px 10px -6px ${({ theme }) => theme.colors.main};
  line-height: 1;
  flex-direction: row;
  user-select: none;
`;
