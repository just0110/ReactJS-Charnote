import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { getLoadingStatus } from "../../redux/selectors";
import { Overlay } from "./styles";
import "./styles.css";

// todo refactor to js styles + separate overlay feature
const Loading = ({ isVisible, overlay }) =>
  isVisible ? (
    <Overlay>
      <div className="loader">
        <div className="boom" />
        <div className="boom" />
        <div className="boom" />
        <div className="boom" />
        <div className="boom" />
        <div className="boom" />
        <div className="boom" />
      </div>
    </Overlay>
  ) : null;

Loading.propTypes = {
  isVisible: propTypes.bool,
  overlay: propTypes.any
};

Loading.defaultProps = {
  overlay: null,
  isVisible: false
};

const mapStateToProps = state => ({
  isVisible: getLoadingStatus(state)
});

export default connect(mapStateToProps, null)(Loading);
