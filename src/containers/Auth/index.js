import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Auth from "./Auth";
import { endLoading, startLoading, changeLanguage } from "../../redux/actions";

const select = createStructuredSelector({});

const action = {
  endLoading,
  startLoading,
  changeLanguage
};

export default connect(select, action)(Auth);
