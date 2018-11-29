import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      // success가 성공이면 Redirect를 그려준다.
      success: false,
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

  async handleLoginButtonClick() {
    // 기능이 많아질 것 같아서 메소드로 분리
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    // await onLogin의 로그인이 다 끝났을 경우에 아래 코드가 실행된다.
    // 로그인이 성공적으로 끝났을 때
    this.setState({
      success: true,
    });
    // I14
    // Redirect 컴포넌트를 렌더링 => 주소표시줄의 상태가 바뀜
  }
  render() {
    const { username, password, success } = this.state;
    if (success) {
      return <Redirect to="/" />;
    }
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
