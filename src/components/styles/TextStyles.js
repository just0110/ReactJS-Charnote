import styled from "styled-components";

const BaseTextStyles = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  word-break: break-word;
  white-space: pre-line;
  margin-top: ${({ top }) => (top ? `${top}em` : "none")};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}em` : "none")};
  margin-left: ${({ left }) => (left ? `${left}em` : "none")};
  margin-right: ${({ right }) => (right ? `${right}em` : "none")};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
`;

export const Head = styled(BaseTextStyles)`
  font-size: 1em;
  font-weight: 500;
`;

export const Subhead = styled(BaseTextStyles)`
  font-size: 0.875em;
  font-weight: 500;
`;

export const Title = styled(BaseTextStyles)`
  font-size: 1.25em;
  font-weight: 500;
`;

export const Text = styled(BaseTextStyles)`
  font-size: 0.875em;
  font-weight: normal;
`;

export const Description = styled(BaseTextStyles)`
  font-size: 0.75em;
  font-weight: normal;
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.gray};
`;
