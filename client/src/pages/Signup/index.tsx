import AuthForm from '../../components/auth/AuthForm';
import { Container, Title } from './style';

const Signup = () => {
  const type = '회원가입';

  return (
    <Container>
      <Title>{type}</Title>
      <AuthForm type={type} />
    </Container>
  );
};

export default Signup;
