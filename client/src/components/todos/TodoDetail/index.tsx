import { useNavigate, useParams } from 'react-router-dom';

import { useGetTodoByIdQuery, useDeleteTodoMutation } from '../../../queries/todo';
import Todo from '../../../types/todos';
import Button from '../../common/Button';
import { Container, ButtonWrapper, Title, Content, UpdatedAt } from './style';
import { changeDateFormat } from '../../../utils/dateFormat';

const TodoDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { title, content, updatedAt } = useGetTodoByIdQuery(params?.id).data?.data.data;
  const { mutate } = useDeleteTodoMutation(params?.id);

  return (
    <Container>
      <h3 className='sr-only'>할 일 (번호)</h3>
      <ButtonWrapper>
        <Button color='red' size='small' type='button' onClick={() => mutate()}>
          삭제
        </Button>
        <Button size='small' type='button' onClick={() => navigate(`/edit/${params.id}`)}>
          수정
        </Button>
      </ButtonWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <UpdatedAt>{changeDateFormat(updatedAt)}</UpdatedAt>
    </Container>
  );
};

export default TodoDetail;
