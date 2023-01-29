import TodoDetail from '../TodoDetail';
import TodoList from '../TodoList';
import { Container } from './style';

const TodoLayout = () => {
  return (
    <Container>
      <h2 className='sr-only'>할일 목록 및 할일 생성</h2>
      <TodoList />
      <TodoDetail />
    </Container>
  );
};

export default TodoLayout;
