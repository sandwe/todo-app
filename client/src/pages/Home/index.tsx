import Navbar from '../../components/common/Navbar';
import TodoList from '../../components/todos/TodoList';
import TodoDetail from '../../components/todos/TodoDetail';
import { Main, ListSection, DetailSection } from './style';
import TodoLayout from '../../components/todos/TodoLayout';

const Home = () => {
  return (
    <>
      <Navbar />
      <TodoLayout />
    </>
  );
};

export default Home;
