import { combineReducers } from "redux";

import auth from "./auth/reducers";
import user from "./user/reducers";
import units from "./units/reducers";
import locales from "./locales/reducers";
import loading from "./loading/reducers";

export default combineReducers({
  auth,
  user,
  units,
  locales,
  loading
});
