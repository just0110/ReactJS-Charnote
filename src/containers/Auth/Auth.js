import React, { useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { Redirect } from "react-router-dom";

import { Input, Button, Title, Subhead, LinkButton } from "../../components";
import { Container, Image, Form, Buttons, ChangeLang } from "./styles";

import { useAuth } from "../../hooks";

// todo beautify errors

const Auth = ({ intl, startLoading, endLoading, changeLanguage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("ua");
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidate, setValidate] = useState(false);
  const [error, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const method = isSignIn ? "signin" : "signup";
  const [{ response, isError }, doFetch] = useAuth(method);

  useEffect(() => {
    if (email.length && password.length) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [email, password, setValidate]);

  // todo make form submit come true :D
  const handleSubmit = () => {
    startLoading();
    doFetch({ email, password });
  };

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

  useEffect(() => {
    if (!response) {
      return;
    }
    endLoading();
    setSuccess(true);
    // setCurrUserState(state => ({
    //   ...state,
    //   isLoggedIn: true,
    //   isLoading: false,
    //   currentUser: response,
    // }))
  }, [response]);

  useEffect(() => {
    if (!isError) {
      return;
    }
    endLoading();
    setError(isError);
  }, [isError]);

  if (isSuccess) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Form>
        <Title>
          {intl.formatMessage({
            id: `AUTH.${isSignIn ? "SIGN_IN" : "SIGN_UP"}`
          })}
        </Title>
        <Input
          label={intl.formatMessage({ id: "AUTH.EMAIL" })}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label={intl.formatMessage({ id: "AUTH.PASSWORD" })}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {isError && <Subhead color="red">{error}</Subhead>}
        <Buttons>
          <LinkButton
            title={intl.formatMessage({
              id: `AUTH.${isSignIn ? "SIGN_IN_TIP" : "SIGN_UP_TIP"}`
            })}
            onClick={() => setIsSignIn(!isSignIn)}
          />
          <Button
            disabled={!isValidate}
            onClick={() => handleSubmit()}
            title={intl.formatMessage({
              id: `AUTH.${isSignIn ? "SIGN_IN" : "SIGN_UP"}`
            })}
          />
        </Buttons>
        <ChangeLang>
          <LinkButton
            title={intl.formatMessage({ id: "AUTH.CHANGE_LANG" })}
            onClick={changeLang}
          />
        </ChangeLang>
      </Form>
      <Image />
    </Container>
  );
};

export default injectIntl(Auth);
