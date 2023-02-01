import React from 'react';
import TodoDetail from '../TodoDetail';
import TodoList from '../TodoList';
import { Container } from './style';

interface todoLayoutProps {
  children: React.ReactNode;
}
const TodoLayout = ({ children }: todoLayoutProps) => {
  return (
    <Container>
      <h2 className='sr-only'>할일 목록 및 할일 생성</h2>
      <TodoList />
      {children}
    </Container>
  );
};

export default TodoLayout;
