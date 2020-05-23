import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { endLoading, startLoading, changeLanguage } from "../../redux/actions";

import Auth from "./Auth";

const select = createStructuredSelector({});

const action = {
  endLoading,
  startLoading,
  changeLanguage
};

export default connect(select, action)(Auth);
