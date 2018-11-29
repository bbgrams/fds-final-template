import React, { Component } from 'react';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  // I13
  handleFieldChange(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }
  // 사용법 : e => this.handleFieldChange(e, 'username')

  handleLoginButtonClick() {
    // 기능이 많아질 것 같아서 메소드로 분리
    const { onLogin } = this.props;
    const { username, password } = this.state;
    onLogin(username, password);
  }
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
      </div>
    );
  }
}
