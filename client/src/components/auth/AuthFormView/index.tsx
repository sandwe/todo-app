import Button from '../../common/Button';
import { Container, Title, Form, Input, LinkText, WarningText } from './style';
import { AuthFormProps } from '../../../pages/LoginPage';

const AuthFormView = ({
  type,
  isEmailValid,
  isPasswordValid,
  isEmailWarn,
  isPasswordWarn,
  disabledClick,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
}: AuthFormProps) => {
  return (
    <Container>
      <Title>{type}</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='email'>이메일</label>
        <Input id='email' type='email' onChange={handleChangeEmail} isValid={isEmailValid} />
        <WarningText isWarn={isEmailWarn}>이메일 형식이 올바르지 않습니다.</WarningText>
        <label htmlFor='password'>비밀번호</label>
        <Input id='password' type='password' onChange={handleChangePassword} isValid={isPasswordValid} />
        <WarningText isWarn={isPasswordWarn}>비밀번호는 최소 8자 이상이어야 합니다.</WarningText>
        <Button disabled={disabledClick}>{type}</Button>
        {type === '로그인' && <LinkText to='/signup'>회원가입</LinkText>}
      </Form>
    </Container>
  );
};

export default AuthFormView;
