import TodoData from '../../../types/todos';
import { TodoListProps } from '../TodoLayout';
import Button from '../../common/Button';
import { Container, Wrapper, Text, Todos, Todo, Title, Content } from './style';

const TodoListView = ({ todos, navigateToNew, navigateToDetail }: TodoListProps) => {
  return (
    <Container>
      <h3 className='sr-only'>할 일 목록</h3>
      <Wrapper>
        <Text>Tasks {todos.length}</Text>
        <Button type='button' size='small' onClick={navigateToNew}>
          NEW
        </Button>
      </Wrapper>
      <Todos>
        {todos.map(({ id, title, content }: TodoData) => (
          <Todo key={id} onClick={() => navigateToDetail(id)}>
            <Title>{title}</Title>
            <Content>{content}</Content>
          </Todo>
        ))}
      </Todos>
    </Container>
  );
};

export default TodoListView;
