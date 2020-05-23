import { createSelector } from "reselect";

const domainSelector = state => state.loading;

export const getLoadingStatus = createSelector(
  domainSelector,
  loading => loading.isLoading
);
