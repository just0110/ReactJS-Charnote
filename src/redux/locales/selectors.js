import { createSelector } from "reselect";

const flattenMessages = (nestedMessages, prefix = "") => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

const domainSelector = state => state.locales;

export const getLanguages = createSelector(
  domainSelector,
  locales => locales.languages
);

export const getLocales = createSelector(
  domainSelector,
  locales => locales.translations
);

export const getFlatTranslations = createSelector(getLocales, locales =>
  flattenMessages(locales)
);
