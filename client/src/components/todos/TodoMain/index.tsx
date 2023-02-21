import memoImage from '../../../assets/memo.png';
import { Container, Title, Img } from './style';

const TodoMain = () => {
  return (
    <Container>
      <Title>새로운 할일을 추가하고 관리하세요!</Title>
      <Img src={memoImage} alt='메모 이미지' />
    </Container>
  );
};

export default TodoMain;
