import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
                  <div className="circle" />
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
          <li key="1">
            <Link to="/polls/me">My Polls</Link>
          </li>,
          <li key="2">
            <Link to="/polls/new">New Polls</Link>
          </li>,
          <li key="3">{user.name}</li>,
          <li key="4">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  };
  render() {
    return (
      <nav style={{ backgroundColor: "#e67e22" }}>
        <div className="nav-wrapper container">
          <Link to="/polls" className="brand-logo">
            FCC-VOTING
          </Link>
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
