import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import authAPI from '../../api/auth';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      navigate('/', { replace: true });
    },
  });
};

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      navigate('/', { replace: true });
    },
  });
};
