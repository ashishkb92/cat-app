import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <span className="navbar-brand">All Categories</span>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/bengal">Bengal</Link>
            </li>
            <li>
              <Link to="/bobtail">American Bobtail</Link>
            </li>
            <li>
              <Link to="/bombay">Bombay</Link>
            </li>
            <li>
              <Link to="/himalayan">Himalayan</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
