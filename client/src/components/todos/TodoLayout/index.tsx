import { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoListView from '../TodoListView';
import { Container } from './style';
import { useGetTodosQuery } from '../../../hooks/queries/todo';
import TodoData from '../../../types/todos';

interface TodoLayoutProps {
  children: React.ReactNode;
}

export interface TodoListProps {
  todos: TodoData[];
  navigateToNew: () => void;
  navigateToDetail: (id: string) => void;
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  const navigate = useNavigate();
  const { data } = useGetTodosQuery();

  const todoListProps: TodoListProps = {
    todos: data?.data.data,
    navigateToNew: () => navigate('/new'),
    navigateToDetail: (id) => startTransition(() => navigate(`/todos/${id}`)),
  };

  return (
    <Container>
      <h2 className='sr-only'>할일 목록 및 할일 생성</h2>
      <TodoListView {...todoListProps} />
      {children}
    </Container>
  );
};

export default TodoLayout;
