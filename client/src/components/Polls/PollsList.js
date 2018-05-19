import React, { Component } from "react";
import { Link } from "react-router-dom";

// This our default landing component...

class PollsList extends Component {
  //render a list of all polls
  renderList = () => {
    return this.props.polls.map(poll => {
      return (
        <Link
          key={poll._id}
          className="collection-item"
          to={`/poll/${poll._id}`}
        >
          {poll.title}
        </Link>
      );
    });
  };

  render() {
    return (
      <div className="container center">
        <div className="collection">{this.renderList()}</div>
      </div>
    );
  }
}

export default PollsList;
