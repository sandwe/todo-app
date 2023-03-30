import Button from '../../common/Button';
import { Container, ButtonWrapper, Title, Content, UpdatedAt } from './style';
import { TodoDetailProps } from '../../../pages/TodoDetailPage';

const TodoDetailView = ({ todo, deleteTodo, navigateToEdit }: TodoDetailProps) => {
  return (
    <Container>
      <h3 className='sr-only'>할 일 보기</h3>
      <ButtonWrapper>
        <Button color='red' size='small' type='button' onClick={deleteTodo}>
          삭제
        </Button>
        <Button size='small' type='button' onClick={navigateToEdit}>
          수정
        </Button>
      </ButtonWrapper>
      <Title>{todo.title}</Title>
      <Content>{todo.content}</Content>
      <UpdatedAt>{todo.updatedAt}</UpdatedAt>
    </Container>
  );
};

export default TodoDetailView;
