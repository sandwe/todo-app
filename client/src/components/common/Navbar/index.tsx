import { Link, useNavigate } from 'react-router-dom';
import { Wrapper, Title, LogoutBtn } from './style';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <Wrapper>
      <Link to='/'>
        <Title>Todo-List</Title>
      </Link>
      <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
    </Wrapper>
  );
};

export default Navbar;
