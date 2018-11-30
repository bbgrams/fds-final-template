import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HeaderView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoutSuccess: false,
    };
  }

  render() {
    const { username, logout } = this.props;
    const { logoutSuccess } = this.state;
    if (logoutSuccess) {
      return <Redirect to="/" />;
    }
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
                this.setState({
                  logoutSuccess: true,
                });
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
