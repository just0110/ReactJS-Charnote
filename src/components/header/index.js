import React, { useState } from "react";
import firebase from "firebase";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

import { Button, Head, LinkButton } from "../index";
import { changeLanguage } from "../../redux/actions";
import { LogoWrapper, HeaderWrapper, Right } from "./styles";

const Header = ({ intl, changeLanguage }) => {
  const [language, setLanguage] = useState("ua");

  // todo REUSABLE LOGIC! Create Context wrapper
  // todo make selector with languages
  const changeLang = () => {
    if (language === "ua") {
      setLanguage("ru");
      changeLanguage("ru");
    } else {
      setLanguage("ua");
      changeLanguage("ua");
    }
  };

  //todo move to api
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {},
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
      <Right>
        <LinkButton
          title={intl.formatMessage({ id: "AUTH.CHANGE_LANG" })}
          onClick={changeLang}
        />
        <Button onClick={logout}>LOGOUT</Button>
      </Right>
    </HeaderWrapper>
  );
};

const action = {
  changeLanguage
};

export default connect(null, action)(injectIntl(Header));
