import { useMutation, useQuery } from '@tanstack/react-query';
import todosAPI from '../api/todos';
import queryClient from './queryClient';

export const useGetTodosQuery = () => useQuery(['todos'], todosAPI.getTodos);

export const usePostTodoMutation = () =>
  useMutation(todosAPI.createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
