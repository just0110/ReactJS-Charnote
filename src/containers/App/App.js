import React, { useEffect, useContext } from "react";
import firebase from "firebase";
import { Switch, Route, withRouter } from "react-router-dom";

import Auth from "../Auth";
import Home from "../Home";
import { UserContext } from "../../contexts/user";

const App = () => {
  // todo check checkUserAuth
  const [userState, setUserState] = useContext(UserContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(res => {
      if (res != null) {
        const user = {
          token: res.refreshToken,
          email: res.email,
          name: res.displayName,
          phone: res.phoneNumber,
          photo: res.photoURL
        };
        setUserState(state => ({
          ...state,
          isLoggedIn: true,
          currentUser: user
        }));
      } else {
        setUserState(state => ({
          ...state,
          isLoggedIn: false,
          currentUser: null
        }));
      }
    });
  }, [setUserState]);

  const { currentUser, isLoggedIn } = userState;

  const component = !isLoggedIn && !currentUser ? Auth : Home;

  return (
    <Switch>
      <Route path="/" component={component} />
    </Switch>
  );
};

export default withRouter(App);
