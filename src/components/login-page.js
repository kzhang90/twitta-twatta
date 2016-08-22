import React from 'react';
import LoginForm from './login-form';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm />
      </div>
    );
  }
}