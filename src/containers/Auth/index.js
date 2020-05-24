import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Auth from "./Auth";
import { changeLanguage } from "../../redux/actions";

const select = createStructuredSelector({});

const action = {
  changeLanguage
};

export default connect(select, action)(Auth);
