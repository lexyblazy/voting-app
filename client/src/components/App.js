import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import PollsList from "./Polls/PollsList";
import PollsNew from "./Polls/PollsNew";
import PollShow from "./Polls/PollShow";
import { fetchUser } from "../actions";

// Todo => There should be two types of App
// App before login
// App after login

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/poll/:id" component={PollShow} />
            <Route path="/polls/new" component={PollsNew} />
            <Route path="/polls" component={PollsList} />
            <Route path="/" exact component={PollsList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
