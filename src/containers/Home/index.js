import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { changeLanguage } from "../../redux/actions";

import Home from "./Home";

const select = createStructuredSelector({});

const action = {
  changeLanguage
};

export default connect(select, action)(Home);
