import { useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/validator';
import AuthFormView from '../../components/auth/AuthFormView';

import { AuthFormProps } from '../LoginPage';
import { useSignupMutation } from '../../queries/auth';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useSignupMutation();

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  const authFormProps: AuthFormProps = {
    type: '회원가입',
    isEmailValid,
    isPasswordValid,
    isEmailWarn: !isEmailValid && !!email.length,
    isPasswordWarn: !isPasswordValid && !!password.length,
    disabledClick: !isEmailValid || !isPasswordValid,
    handleChangeEmail: (e) => setEmail(e.target.value),
    handleChangePassword: (e) => setPassword(e.target.value),
    handleSubmit: (e) => {
      e.preventDefault();
      mutate({ email, password });
    },
  };

  return <AuthFormView {...authFormProps} />;
};

export default SignupPage;
