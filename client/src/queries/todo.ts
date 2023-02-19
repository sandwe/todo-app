import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import todosAPI from '../api/todos';
import { TodoForm, TodoFormAndId } from '../types/todos';
import queryClient from './queryClient';

export const useGetTodosQuery = () => useQuery(['todos'], todosAPI.getTodos);

export const useGetTodoByIdQuery = (id: string | undefined) => useQuery(['todo', id], () => todosAPI.getTodoById(id));

export const usePostTodoMutation = () => {
  const navigate = useNavigate();
  return useMutation(todosAPI.createTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['todos']);
      navigate(`/todos/${data.data.data.id}`);
    },
  });
};

export const useDeleteTodoMutation = (id: string | undefined) => {
  const navigate = useNavigate();
  return useMutation(() => todosAPI.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      navigate('/');
    },
  });
};

export const useUpdateTodoMutation = () => {
  const navigate = useNavigate();
  return useMutation((data: TodoFormAndId) => todosAPI.updateTodo(data), {
    onSuccess: (data) => {
      navigate(`/todos/${data.data.data.id}`);
      queryClient.invalidateQueries(['todos']);
    },
  });
};
