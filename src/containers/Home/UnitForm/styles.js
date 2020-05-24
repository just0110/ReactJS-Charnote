import styled from "styled-components";

export const Form = styled.div`
  height: 100%;
  width: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
`;

export const Check = styled.div`
  width: 100%;
  margin: 2em 0em;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & > button {
    margin-right: 2em;
  }
`;
