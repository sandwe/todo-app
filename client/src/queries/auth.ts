import { useMutation } from '@tanstack/react-query';
import authAPI from '../api/auth';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });

export const useSignupMutation = () =>
  useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
