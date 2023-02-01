import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import { Container, Wrapper, Text, Todos, Todo, Title, Content } from './style';

const TodoList = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h3 className='sr-only'>할 일 목록</h3>
      <Wrapper>
        <Text>Tasks 3</Text>
        <Button type='button' size='small' onClick={() => navigate('/new')}>
          NEW
        </Button>
      </Wrapper>
      <Todos>
        <Todo>
          <Title>제목1</Title>
          <Content>내용1</Content>
        </Todo>
        <Todo>
          <Title>제목2</Title>
          <Content>내용2</Content>
        </Todo>
        <Todo>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis nulla fugit ratione natus libero
            recusandae quis aliquam, atque maxime, reprehenderit repellendus quo molestiae optio quaerat a nobis
            deleniti praesentium.
          </Title>
          <Content>
            모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로
            정한다. 정부는 회계연도마다 예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는 회계연도 개시
            30일전까지 이를 의결하여야 한다.
          </Content>
        </Todo>
      </Todos>
    </Container>
  );
};

export default TodoList;
