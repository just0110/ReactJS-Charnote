import { createTypes } from "redux-compose-reducer";

export const LOCALES_TYPES = createTypes("locales", ["changeLanguage"]);

export const changeLanguage = lang => ({
  type: LOCALES_TYPES.changeLanguage,
  payload: lang
});
