import TodoLayout from '../../components/todos/TodoLayout';
import { lazy, Suspense } from 'react';
import TodoSkeleton from '../../components/todos/TodoSkeleton';

const TodoDetail = lazy(() => import('../../components/todos/TodoDetail'));

const TodoDetailPage = () => {
  return (
    <TodoLayout>
      <Suspense fallback={<TodoSkeleton />}>
        <TodoDetail />
      </Suspense>
    </TodoLayout>
  );
};

export default TodoDetailPage;
