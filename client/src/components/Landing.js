import React, { Component } from "react";
import { connect } from "react-redux";
import PollsList from "./Polls/PollsList";
import { Spinner } from "./common";
import { fetchAllPolls } from "../actions";

class Landing extends Component {
  componentWillMount() {
    this.props.fetchAllPolls();
  }

  render() {
    const { polls } = this.props.polls;
    return (
      <div className="container center">
        <h1>fcc-voting</h1>
        <p>
          Below are polls hosted by fcc-voting. Select a poll to see the results
          and vote, or sign-in to make a new poll.
        </p>
        {/* 
          The length of polls array has to be greater than 0 before it can be rendered
          otherwise a spinner will be shown in place
        */}
        {polls.length > 0 ? (
          <PollsList polls={polls} />
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
export default connect(mapStateToProps, { fetchAllPolls })(Landing);
