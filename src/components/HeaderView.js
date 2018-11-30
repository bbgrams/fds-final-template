import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HeaderView extends Component {
  render() {
    const { username, logout, history } = this.props;

    // I17
    return (
      <div>
        <Link to="/">빕다방</Link>
        {username ? (
          <React.Fragment>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                // I20
                history.push('/');
              }}
            >
              로그아웃
            </button>
          </React.Fragment>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
