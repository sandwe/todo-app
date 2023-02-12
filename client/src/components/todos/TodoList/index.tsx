import { useNavigate } from 'react-router-dom';
import { useGetTodosQuery } from '../../../queries/todo';
import Button from '../../common/Button';
import { Container, Wrapper, Text, Todos, Todo, Title, Content } from './style';
import todoType from '../../../types/todos';

const TodoList = () => {
  const navigate = useNavigate();

  const { isLoading, isError, error, data } = useGetTodosQuery();

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  return (
    <Container>
      <h3 className='sr-only'>할 일 목록</h3>
      <Wrapper>
        <Text>Tasks {data?.data.data.length || 0}</Text>
        <Button type='button' size='small' onClick={() => navigate('/new')}>
          NEW
        </Button>
      </Wrapper>
      <Todos>
        {data?.data.data.map((todo: todoType) => (
          <Todo key={todo.id} onClick={() => navigate(`/todos/${todo.id}`)}>
            <Title>{todo.title}</Title>
            <Content>{todo.content}</Content>
          </Todo>
        ))}
      </Todos>
    </Container>
  );
};

export default TodoList;
