import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            fcc-voting
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="/auth/twitter">Sign in With Twitter</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
