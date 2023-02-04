import { useMutation, useQuery } from '@tanstack/react-query';
import todosAPI from '../api/todos';
import queryClient from './queryClient';

export const useGetTodosQuery = () => useQuery({ queryKey: ['todos'], queryFn: todosAPI.getTodos });

export const usePostTodoMutation = () =>
  useMutation(todosAPI.createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
