import React, { useContext } from "react";

import { Overlay } from "./styles";
import "./styles.css";
import { LoadingContext } from "../../contexts/loading";

// todo refactor to js styles + separate overlay feature
const Loading = () => {
  const [loading] = useContext(LoadingContext);

  return loading ? (
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
};

export default Loading;
