import AuthForm from '../../components/auth/AuthForm';
import { Container, Title } from './style';

const LoginPage = () => {
  const type = '로그인';
  return (
    <Container>
      <Title>{type}</Title>
      <AuthForm type={type} />
    </Container>
  );
};

export default LoginPage;
