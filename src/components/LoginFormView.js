import React, { Component } from 'react';

export default class LoginFormView extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <input type="password" />
        <button>로그인</button>
      </div>
    );
  }
}
