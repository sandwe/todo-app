import { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetTodosQuery } from '../../../queries/todo';
import TodoData from '../../../types/todos';
import TodoListView from './TodoListView';

export interface TodoListViewProps {
  todos: TodoData[];
  navigateToNew: () => void;
  navigateToDetail: (id: string) => void;
}

const TodoList = () => {
  const navigate = useNavigate();
  const { data } = useGetTodosQuery();

  const todoListViewProps: TodoListViewProps = {
    todos: data?.data.data,
    navigateToNew: () => navigate('/new'),
    navigateToDetail: (id) => startTransition(() => navigate(`/todos/${id}`)),
  };

  return <TodoListView {...todoListViewProps} />;
};

export default TodoList;
