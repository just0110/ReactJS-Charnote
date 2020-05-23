import React from "react";
import firebase from "firebase";
import { injectIntl } from "react-intl";

import { Button, Head} from "../index";
import { LogoWrapper, HeaderWrapper } from "./styles";

const Header = ({ intl }) => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("OK");
        },
        error => {
          console.log("error", error);
        }
      );
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Head>{intl.formatMessage({ id: "HEADER.TITLE" })}</Head>
      </LogoWrapper>
      <Button onClick={logout}>LOGOUT</Button>
    </HeaderWrapper>
  );
};

export default injectIntl(Header);
