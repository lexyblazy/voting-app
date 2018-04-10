import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
 
  renderContent = () => {
    switch (this.props.auth.user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/twitter">Sign in With Twitter</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">fcc-voting</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Navbar);
