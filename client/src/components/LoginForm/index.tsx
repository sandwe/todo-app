import { useEffect, useState } from 'react';
import { preview } from 'vite';
import { validateEmail, validatePassword } from '../../utils/validator';
import { Form, Label, Input, Button, LinkText } from './style';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isActive = validateEmail(e.target.value) && !!e.target.value.length;
    setIsValid((prev) => ({ ...prev, email: isActive }));
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isActive = validatePassword(e.target.value) && !!e.target.value.length;
    setIsValid((prev) => ({ ...prev, password: isActive }));
    setPassword(e.target.value);
  };

  const isDisabled = !isValid.password || !isValid.email;

  return (
    <Form>
      <Label htmlFor='email'>이메일</Label>
      <Input id='email' type='email' onChange={handleChangeEmail} />
      <Label htmlFor='password'>비밀번호</Label>
      <Input id='password' type='password' onChange={handleChangePassword} />
      <Button disabled={isDisabled}>로그인</Button>
      <LinkText to='/signup'>회원가입</LinkText>
    </Form>
  );
};

export default LoginForm;
