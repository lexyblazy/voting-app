import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllPolls } from "../../actions";
import { Spinner } from "../common";

// This our default landing component...

class PollsList extends Component {
  componentWillMount() {
    this.props.fetchAllPolls();
  }

  //render a list of all polls
  renderList = () => {
    return this.props.polls.polls.map(poll => {
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
    const { polls } = this.props.polls; //==see the comment on line 52
    return (
      <div className="container center">
        <div>
          <h1>fcc-voting</h1>
          <p>
            Below are polls hosted by fcc-voting. Select a poll to see the
            results and vote, or sign-in to make a new poll.
          </p>
        </div>
        {/* 
          The length of polls array has to be greater than 0 before it can be rendered
          otherwise a spinner will be shown in place
        */}
        {polls.length > 0 ? (
          <div className="collection">{this.renderList()}</div>
        ) : (
          <Spinner size="big" />
        )}
      </div>
    );
  }
}

//this function allows us to access our state object from redux store
// whatever is returned from here will be available as props
const mapStateToProps = ({ polls }) => ({ polls });

//connecting our component to the redux store
export default connect(mapStateToProps, { fetchAllPolls })(PollsList);
