import { createStore, applyMiddleware, compose as simpleCompose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import reducer from "./reducers";

export default function configureStore() {
  const isDev = process.env.NODE_ENV === "development";
  const compose = isDev ? composeWithDevTools : simpleCompose;
  const logger = isDev ? [createLogger({ collapsed: true })] : [];

  return createStore(reducer, compose(applyMiddleware(...logger)));
}
