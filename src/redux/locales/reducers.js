import { composeReducer } from "redux-compose-reducer";
import update from "update-js";

import { localesUA, localesRU } from "../../constants/translations";

import { LOCALES_TYPES } from "./actions";

const initialState = {
  languages: [
    {
      lang_key: "ua",
      lang_label: "Українська"
    },
    {
      lang_key: "ru",
      lang_label: "Русский"
    }
  ],
  translations: localesUA
};

export const changeLanguage = (state, { payload }) => {
  let translations = localesUA;
  if (payload === "ru") translations = localesRU;

  return update.assign(state, {
    translations
  });
};

export default composeReducer({
  types: {
    ...LOCALES_TYPES
  },
  reducers: {
    changeLanguage
  },
  initialState
});
