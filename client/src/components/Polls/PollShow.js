import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPoll } from "../../actions/";
import { Spinner, baseColor, Chart } from "../common";

class PollShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPoll(id);
  }
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
          <div className="col s6">
            <h5>{poll.title}</h5>
            <div style={{ marginBottom: 20 }}>
              <label>I'd like to vote for: </label>
              <select className="browser-default">
                <option value="" disabled defaultValue>
                  Choose your option
                </option>
                {this.renderOptions()}
              </select>
            </div>
            <button className="btn" style={{ backgroundColor: baseColor }}>
              Submit
            </button>
          </div>
          <div className="col s6">
            <Chart />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ polls }) => ({ poll: polls });

export default connect(mapStateToProps, { fetchPoll })(PollShow);
