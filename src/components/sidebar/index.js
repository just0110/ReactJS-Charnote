import React from "react";
import { Title } from "../index";
import { Close, Content, Header, Container } from "./styles";

const Sidebar = ({ open, onClose, title, children }) => {
  return (
    <Container open={open} position="right">
      <Content>
        <Header>
          <Title>{title}</Title>
          <Close onClick={onClose}>X</Close>
        </Header>
        {children}
      </Content>
    </Container>
  );
};

export default Sidebar;
