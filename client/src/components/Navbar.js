import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  renderContent = () => {
    const { user } = this.props.auth;
    switch (user) {
      case null:
        return (
          <li>
            <div className="preloader-wrapper small active">
              <div className="spinner-layer spinner-yellow-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div class="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </li>
        );
      case false:
        return (
          <li>
            <a href="/auth/twitter">Signin/Signup With Twitter</a>
          </li>
        );
      default:
        return [
          <li>
            <a href="/">My Polls</a>
          </li>,
          <li>
            <a href="/">New Polls</a>
          </li>,
          <li>{user.name}</li>,
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  };
  render() {
    return (
      <nav style={{ backgroundColor: "#e67e22" }}>
        <div className="nav-wrapper container">
          <a className="brand-logo">FCC-VOTING</a>
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
