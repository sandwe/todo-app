import { useParams } from 'react-router-dom';

import { useGetTodoByIdQuery } from '../../../queries/todo';
import Button from '../../common/Button';
import { Container, ButtonWrapper, Title, Content, UpdatedAt } from './style';

const TodoDetail = () => {
  const params = useParams();
  const { isLoading, isError, error, data } = useGetTodoByIdQuery(params?.id);
  const { title, content, updatedAt } = data?.data.data;

  return (
    <Container>
      <h3 className='sr-only'>할 일 (번호)</h3>
      <ButtonWrapper>
        <Button color='red' size='small' type='button'>
          삭제
        </Button>
        <Button size='small' type='button'>
          수정
        </Button>
      </ButtonWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <UpdatedAt>{updatedAt}</UpdatedAt>
    </Container>
  );
};

export default TodoDetail;
