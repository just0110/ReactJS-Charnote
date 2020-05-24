import React, { useState } from "react";
import { injectIntl } from "react-intl";

import UnitForm from "./UnitForm";
import UnitTable from "./UnitTable";

import { Body, Content, Container } from "./styles";
import { UnitsProvider } from "../../contexts/units";
import { Header, SideBar, Button } from "../../components";

const Home = ({ intl }) => {
  const [isSidebar, setSidebar] = useState(false);

  return (
    <UnitsProvider>
      <Container>
        <Header />
        <Body>
          <Content>
            <UnitTable setSidebar={cond => setSidebar(cond)} />
            <Button
              width={10}
              onClick={() => setSidebar(true)}
              title={intl.formatMessage({ id: "HOME.ADD" })}
            />
          </Content>
          <SideBar
            open={isSidebar}
            title={intl.formatMessage({ id: "HOME.MAIN_INFO" })}
          >
            <UnitForm setSidebar={cond => setSidebar(cond)} />
          </SideBar>
        </Body>
      </Container>
    </UnitsProvider>
  );
};

export default injectIntl(Home);
