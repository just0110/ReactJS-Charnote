import React from "react";
import { injectIntl } from "react-intl";

import { Head } from "../../index";

import { LogoWrapper, HeaderWrapper } from "./styles";

const Header = ({ intl }) => {
  const logout = e => {
    e.preventDefault();
    //logout
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Head>{intl.formatMessage({ id: "HEADER.TITLE" })}</Head>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default injectIntl(Header);
