import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Container, Title } from './style';

const Login = () => {
  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm />
    </Container>
  );
};

export default Login;
