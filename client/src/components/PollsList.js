import React, { Component } from "react";

class PollsList extends Component {
  render() {
    return (
      <div className="container center">
        <div>
          <h1>fcc-voting</h1>
          <p>
            Below are polls hosted by fcc-voting. Select a poll to see the
            results and vote, or sign-in to make a new poll.
          </p>
        </div>
        <div>The polls list Component</div>
      </div>
    );
  }
}

export default PollsList;
