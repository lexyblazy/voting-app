import React, { Component } from "react";
import { connect } from "react-redux";
import { createPoll } from "../../actions";

class PollsNew extends Component {
  state = { title: "", options: "", error: "" };

  handleSubmit = e => {
    const { title, options } = this.state;
    const { history } = this.props;
    e.preventDefault();
    if (!this.state.title || !this.state.options) {
      this.setState({ error: "Complete Required fields" });
      return;
    }
    const poll = {
      title,
      options: options.split(",").map(option => ({ option }))
    };
    this.props.createPoll(poll,history);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };

  render() {
    const { title, options, error } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h1 className="header">Make a new poll</h1>
        {error ? (
          <div className="container">
            <h5 className="red-text">{this.state.error}</h5>
          </div>
        ) : (
          ""
        )}
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="title">
            {" "}
            <span className="red-text">*</span> title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="options">
            {" "}
            <span className="red-text">*</span> Options (Separated by a comma)
          </label>
          <textarea
            value={options}
            style={{ marginTop: 20 }}
            name="options"
            cols="20"
            onChange={this.handleChange}
            rows="20"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <button style={{ backgroundColor: "#e67e22" }} className="btn">
            SUBMIT
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, { createPoll })(PollsNew);
