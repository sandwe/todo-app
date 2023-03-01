import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteTodoMutation, useGetTodoByIdQuery } from '../../queries/todo';
import TodoFallback from '../../components/todos/TodoFallback';
import TodoLayout from '../../components/todos/TodoLayout';
import TodoSkeleton from '../../components/todos/TodoSkeleton';
import DefferedComponent from '../../components/common/DefferedComponent';
import TodoData from '../../types/todos';
import { changeDateFormat } from '../../utils/dateFormat';

const TodoDetailView = lazy(() => import('../../components/todos/TodoDetailView'));

export interface TodoDetailProps {
  todo: Pick<TodoData, 'title' | 'content' | 'updatedAt'>;
  deleteTodo: () => void;
  navigateToEdit: () => void;
}

const TodoDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    data: { title, content, updatedAt },
  } = useGetTodoByIdQuery(params?.id);
  const { mutate } = useDeleteTodoMutation(params?.id);

  const todoDetailProps: TodoDetailProps = {
    todo: {
      title,
      content,
      updatedAt: changeDateFormat(updatedAt),
    },
    deleteTodo: mutate,
    navigateToEdit: () => navigate(`/edit/${params.id}`),
  };

  return (
    <TodoLayout>
      <ErrorBoundary FallbackComponent={TodoFallback} onReset={() => navigate('/')}>
        <Suspense
          fallback={
            <DefferedComponent>
              <TodoSkeleton />
            </DefferedComponent>
          }
        >
          <TodoDetailView {...todoDetailProps} />
        </Suspense>
      </ErrorBoundary>
    </TodoLayout>
  );
};

export default TodoDetailPage;
