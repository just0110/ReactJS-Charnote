import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-radius: 1em;
  margin: 2em 0em;
`;

export const PaginationRow = styled.div`
  & > ul {
    display: inline-flex;
    padding-left: 15px;
    padding-right: 15px;
  }

  & > ul > li {
    display: flex;
    margin: 0.7em;
  }
`;

export const Row = styled.tr``;

export const Cell = styled.td`
  font-weight: ${({ header }) => (header ? "500" : "none")};
  background: ${({ header, theme }) =>
    header ? theme.colors.grayLight : "transparent"};
  min-height: ${({ header }) => (header ? "4em" : "3em")};
  padding: 0.5em;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 10em;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grayLight}`};
  word-break: break-word;
`;
