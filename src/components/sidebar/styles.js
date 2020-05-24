import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width, open }) => (open ? width || "40vw" : "0")};
  height: ${({ height }) => height || "100%"};
  transition: all 250ms ease-in-out;
  background: ${({ background }) => background || "white"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  left: ${({ position }) => (position === "left" ? "0" : "")};
  right: ${({ position }) => (position === "right" ? "0" : "")};

  & > div {
    opacity: ${({ open }) => (open ? "1" : "0")};
    transition: all 250ms ease-in-out;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  overflow: scroll;
  transition: opacity 1s ease;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
