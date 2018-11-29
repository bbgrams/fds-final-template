import React, { Component } from 'react';
import LoginForm from '../containers/LoginForm';
import Layout from '../components/Layout';

export default class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <h1>로그인</h1>
        <LoginForm />
      </Layout>
    );
  }
}
