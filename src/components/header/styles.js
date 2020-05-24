import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4em;
  z-index: 999;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.white};
  padding: 10px 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
