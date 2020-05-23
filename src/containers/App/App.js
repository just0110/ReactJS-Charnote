import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Auth from "../Auth";
import Home from "../Home";

class App extends Component {
  // todo check checkUserAuth

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/home" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(App);
