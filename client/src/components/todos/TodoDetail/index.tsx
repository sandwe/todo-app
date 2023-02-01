import Button from '../../common/Button';
import { Container, ButtonWrapper, Title, Content, UpdatedAt } from './style';

const TodoDetail = () => {
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
      <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis ratione, eos quasi possimus
        nobis praesentium ipsa minima tempora sequi, amet ex iure! Ipsam omnis quis nemo veritatis et mollitia.
      </Title>
      <Content>
        Fugit alias, porro libero doloribus, veniam eveniet praesentium fuga corporis aliquid nihil, laboriosam nisi.
      </Content>
      <UpdatedAt>2023년 1월 29일</UpdatedAt>
    </Container>
  );
};

export default TodoDetail;
