import React, { Component } from "react";

import Navbar from './Navbar';
import PollsList from './PollsList'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <PollsList/>
      </div>
    );
  }
}

export default Home;