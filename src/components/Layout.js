import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">빕다방</Link>
          <Link to="/login">로그인</Link>
        </div>
        {this.props.children}
        <div>푸터입니다</div>
      </div>
    );
  }
}
