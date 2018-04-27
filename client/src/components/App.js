import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import PollsList from "./Polls/PollsList";
import PollsNew from "./Polls/PollsNew";
import { fetchUser } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/polls/new" exact component={PollsNew} />
          <Route path="/polls" component={PollsList} />
          <Route path="/" exact component={PollsList} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
