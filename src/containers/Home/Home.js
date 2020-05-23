import React, { useState } from "react";
import { injectIntl } from "react-intl";

import { Body, Content, Container } from "./styles";
import { Header, SideBar, LinkButton } from "../../components";
import UnitForm from "./UnitForm";
import UnitTable from "./UnitTable";

const Home = ({ intl }) => {
  const [isCreate, setCreateSidebar] = useState(false);
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <LinkButton
            plus
            onClick={() => setCreateSidebar(true)}
            title={intl.formatMessage({ id: "HOME.ADD" })}
          />
          <UnitTable />
        </Content>
        <SideBar
          title={intl.formatMessage({ id: "HOME.ADD_UNIT" })}
          open={isCreate}
          onClose={() => setCreateSidebar(false)}
        >
          <UnitForm />
        </SideBar>
      </Body>
    </Container>
  );
};

export default injectIntl(Home);
