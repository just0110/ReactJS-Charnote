import React from "react";

import { Title } from "../index";
import { Content, Header, Container } from "./styles";

const Sidebar = ({ open, title, children }) => {
  return (
    <Container open={open} position="right">
      <Content>
        <Header>
          <Title>{title}</Title>
        </Header>
        {children}
      </Content>
    </Container>
  );
};

export default Sidebar;
