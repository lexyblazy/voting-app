import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "./Home";
import { fetchUser } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
