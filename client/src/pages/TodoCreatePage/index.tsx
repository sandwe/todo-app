import TodoContainer from '../../components/todos/TodoContainer';
import TodoForm from '../../components/todos/TodoForm';
import { usePostTodoMutation } from '../../queries/todo';

const TodoCreatePage = () => {
  const { mutate } = usePostTodoMutation();

  return (
    <TodoContainer>
      <TodoForm mutate={mutate} />
    </TodoContainer>
  );
};

export default TodoCreatePage;
