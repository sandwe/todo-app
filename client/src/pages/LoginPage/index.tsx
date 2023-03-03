import { useState } from 'react';
import { useLoginMutation } from '../../queries/auth';
import { validateEmail, validatePassword } from '../../utils/validator';
import AuthFormView from '../../components/auth/AuthFormView';

export interface AuthFormProps {
  type: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useLoginMutation();

  const authFormProps: AuthFormProps = {
    type: '로그인',
    isEmailValid: validateEmail(email),
    isPasswordValid: validatePassword(password),
    handleChangeEmail: (e) => setEmail(e.target.value),
    handleChangePassword: (e) => setPassword(e.target.value),
    handleSubmit: (e) => {
      e.preventDefault();
      mutate({ email, password });
    },
  };

  return <AuthFormView {...authFormProps} />;
};

export default LoginPage;
