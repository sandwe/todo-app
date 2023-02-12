import { useNavigate } from 'react-router-dom';
import { FallbackProps } from 'react-error-boundary';
import Button from '../../common/Button';
import { Container } from './style';

const TodoFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <p>에러: {error.message}</p>
      <Button onClick={resetErrorBoundary}>다른 할일 하러가기</Button>
    </Container>
  );
};

export default TodoFallback;
