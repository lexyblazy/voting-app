import React, { Component } from "react";

class PollsNew extends Component {
  render() {
    return (
      <div className="container">
        <div className="input-field">
          <label htmlFor="title">title</label>
          <input type="text" name="title" />
        </div>
      </div>
    );
  }
}

export default PollsNew;
