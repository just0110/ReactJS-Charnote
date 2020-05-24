import React, { useContext, useEffect, useState } from "react";
import { injectIntl } from "react-intl";
import { Redirect } from "react-router-dom";

import { Input, Button, Title, Subhead, LinkButton } from "../../components";
import { Container, Image, Form, Buttons, ChangeLang } from "./styles";

import { useAuth } from "../../hooks";
import { LoadingContext } from "../../contexts/loading";

// todo beautify errors

const Auth = ({ intl, changeLanguage }) => {
  const [loading, setLoading] = useContext(LoadingContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("ua");
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidate, setValidate] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const method = isSignIn ? "signin" : "signup";
  const [{ response, error }, doFetch] = useAuth(method);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    if (email.length && password.length) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [email, password, setValidate]);

  // todo make form submit come true :D
  const handleSubmit = () => {
    setLoading(true);
    doFetch({ email, password });
  };

  // todo move to context
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
    if (response) {
      setSuccess(true);
    }
    setLoading(false);
  }, [response, error, setLoading]);

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
        {error && <Subhead color="red">{error}</Subhead>}
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
