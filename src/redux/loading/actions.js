import { createTypes } from "redux-compose-reducer";

export const LOADING_TYPES = createTypes("loading", [
  "startLoading",
  "endLoading"
]);

export const startLoading = () => ({ type: LOADING_TYPES.startLoading });
export const endLoading = () => ({ type: LOADING_TYPES.endLoading });
