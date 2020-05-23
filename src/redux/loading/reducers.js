import { composeReducer } from "redux-compose-reducer";
import update from "update-js";

import { LOADING_TYPES, LOCALES_TYPES } from "../actions";

const initialState = {
  isLoading: false
};

export const startLoading = state =>
  update.assign(state, {
    isLoading: true
  });

export const endLoading = state =>
  update.assign(state, {
    isLoading: false
  });

export default composeReducer({
  types: {
    ...LOADING_TYPES,
    ...LOCALES_TYPES
  },
  reducers: {
    startLoading,
    endLoading
  },
  initialState
});
