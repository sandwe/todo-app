import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import todosAPI from '../api/todos';
import queryClient from './queryClient';

export const useGetTodosQuery = () => useQuery(['todos'], todosAPI.getTodos);

export const useGetTodoByIdQuery = (id: string | undefined) => useQuery(['todo', id], () => todosAPI.getTodoById(id));

export const usePostTodoMutation = () =>
  useMutation(todosAPI.createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

export const useDeleteTodoMutation = (id: string | undefined) => {
  const navigate = useNavigate();
  return useMutation(() => todosAPI.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      navigate('/');
    },
  });
};
