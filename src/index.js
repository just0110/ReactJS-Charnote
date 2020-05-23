import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./containers/App/index.css";
import { Theme } from "./constants";
import "./containers/App/normalize.css";
import configureStore from "./redux/store";
import { Locales, Loading } from "./components";
import { App, unregister } from "./containers/App";
import { initializeFirebase } from "./configs/firebase";

initializeFirebase();
const store = configureStore();
const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <Theme>
      <Locales>
        <BrowserRouter>
          <>
            <App />
            <Loading overlay={true} />
          </>
        </BrowserRouter>
      </Locales>
    </Theme>
  </Provider>,
  target
);

unregister();
