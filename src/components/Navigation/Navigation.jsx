import React, { Component } from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';

// eslint-disable-next-line react/prefer-stateless-function
export default class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <nav className="nav">
          <div className="logo--container">
            <Logo />
          </div>
          <div className="btn--container">
            <button className="btn btn--sign-out" type="button">
              Sign Out
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
