import { useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/validator';
import { Form, Input, Button, LinkText, WarningText } from './style';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Form>
      <label htmlFor='email'>이메일</label>
      <Input id='email' type='email' onChange={handleChangeEmail} isValid={isEmailValid} />
      <WarningText isWarn={!isEmailValid && !!email.length}>이메일 형식이 올바르지 않습니다.</WarningText>
      <label htmlFor='password'>비밀번호</label>
      <Input id='password' type='password' onChange={handleChangePassword} isValid={isPasswordValid} />
      <WarningText isWarn={!isPasswordValid && !!password.length}>비밀번호는 최소 8자 이상이어야 합니다.</WarningText>
      <Button disabled={!isEmailValid || !isPasswordValid}>로그인</Button>
      <LinkText to='/signup'>회원가입</LinkText>
    </Form>
  );
};

export default LoginForm;
