import Navbar from '../../components/common/Navbar';
import TodoList from '../../components/todos/TodoList';
import TodoDetail from '../../components/todos/TodoDetail';
import { Main, ListSection, DetailSection } from './style';

const Home = () => {
  return (
    <>
      <Navbar />
      <Main>
        <h2 className='sr-only'>할일 목록 및 할일 생성</h2>
        <ListSection>
          <TodoList />
        </ListSection>
        <DetailSection>
          <TodoDetail />
        </DetailSection>
      </Main>
    </>
  );
};

export default Home;
