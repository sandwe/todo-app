import TodoLayout from '../../components/todos/TodoLayout';
import TodoForm from '../../components/todos/TodoForm';
import { usePostTodoMutation } from '../../queries/todo';

const TodoCreatePage = () => {
  const { mutate } = usePostTodoMutation();

  return (
    <TodoLayout>
      <TodoForm mutate={mutate} />
    </TodoLayout>
  );
};

export default TodoCreatePage;
