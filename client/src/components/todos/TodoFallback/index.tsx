import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button';

const TodoFallback = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>잘못된 페이지 접근입니다.</p>
      <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
    </div>
  );
};

export default TodoFallback;
