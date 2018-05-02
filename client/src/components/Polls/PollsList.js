import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllPolls } from "../../actions";
import { Spinner } from "../common";

class PollsList extends Component {
  componentWillMount() {
    this.props.fetchAllPolls();
  }

  renderList = () => {
    return this.props.polls.polls.map(poll => {
      return (
        <li key ={poll._id} className="collection-item">
          <Link to={`/poll/${poll._id}`}>{poll.title}</Link>
        </li>
      );
    });
  };

  render() {
    const { polls } = this.props.polls;
    console.log(polls);
    return (
      <div className="container center">
        <div>
          <h1>fcc-voting</h1>
          <p>
            Below are polls hosted by fcc-voting. Select a poll to see the
            results and vote, or sign-in to make a new poll.
          </p>
        </div>
        {polls.length > 0 ? (
          <div>
            <ul className="collection">{this.renderList()}</ul>
          </div>
        ) : (
          <Spinner size="big" />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ polls }) => ({ polls });

export default connect(mapStateToProps, { fetchAllPolls })(PollsList);
