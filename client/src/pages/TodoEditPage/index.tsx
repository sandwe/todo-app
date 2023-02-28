import { useParams } from 'react-router-dom';

import TodoLayout from '../../components/todos/TodoContainer';
import TodoForm from '../../components/todos/TodoForm';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from '../../queries/todo';

const TodoEditPage = () => {
  const params = useParams();

  const { data: todo } = useGetTodoByIdQuery(params?.id).data?.data;
  const { mutate } = useUpdateTodoMutation();

  return (
    <TodoLayout>
      <TodoForm todo={todo} mutate={mutate} isEditMode={true} />
    </TodoLayout>
  );
};

export default TodoEditPage;
