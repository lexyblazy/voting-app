import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoll, votePoll } from "../../actions/";
import { Spinner, baseColor, Chart, generateRandomColor } from "../common";

//This component will be used to show details for a specific poll

class PollShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPoll(id);
  }

  state = { option: "" };

  //render the options on a poll
  renderOptions = () => {
    const { options } = this.props.poll.poll;
    return options.map(({ option }, index) => {
      return (
        <option key={index} value={option}>
          {option}
        </option>
      );
    });
  };

  //the event is fired when the options in the select changes
  handleOptionChange = e => {
    this.setState({ option: e.target.value });
  };

  // when the form is submitted
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.option) return;
    const {_id} = this.props.poll.poll;
    const {option} = this.state;
    this.props.votePoll(_id,option);
  };

  //draw the chart for a poll
  renderChart = () => {
    const { options } = this.props.poll.poll;

    const data = options.map(({ option, votesCount }, index) => {
      return {
        value: votesCount,
        color: generateRandomColor(),
        highlight: "#eaeaea",
        label: option
      };
    });
    return <Chart chartData={data} />;
  };
  render() {
    const { poll } = this.props.poll;

    if (Object.keys(poll).length < 1) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <div className="row">
          <form className="col s6" onSubmit={this.handleSubmit}>
            <h5>{poll.title}</h5>
            <div style={{ marginBottom: 20 }}>
              <label>I'd like to vote for: </label>
              <select
                className="browser-default"
                onChange={this.handleOptionChange}
              >
                <option value="" default>
                  Choose your option
                </option>
                {this.renderOptions()}
              </select>
            </div>
            <button className="btn" style={{ backgroundColor: baseColor }}>
              Submit
            </button>
          </form>
          <div className="col s6">{this.renderChart()}</div>
        </div>
      </div>
    );
  }
}
//this function allows us to access our state object from redux store
// whatever is returned from here will be available as props
const mapStateToProps = ({ polls }) => ({ poll: polls });

//connecting our component to the redux store

export default connect(mapStateToProps, { fetchPoll, votePoll })(PollShow);
