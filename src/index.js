import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./containers/App/index.css";
import { Theme } from "./constants";
import "./containers/App/normalize.css";
import configureStore from "./redux/store";
import { UserProvider } from "./contexts/user";
import { Loading, Locales } from "./components";
import { App, unregister } from "./containers/App";
import { LoadingProvider } from "./contexts/loading";
import { initializeFirebase } from "./configs/firebase";

initializeFirebase();
const store = configureStore();
const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <Theme>
      <LoadingProvider>
        <Locales>
          <BrowserRouter>
            <UserProvider>
              <App />
              <Loading />
            </UserProvider>
          </BrowserRouter>
        </Locales>
      </LoadingProvider>
    </Theme>
  </Provider>,
  target
);

unregister();
