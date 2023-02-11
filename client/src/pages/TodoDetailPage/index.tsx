import { useState, useEffect, lazy, Suspense, PropsWithChildren } from 'react';

import TodoLayout from '../../components/todos/TodoLayout';
import TodoSkeleton from '../../components/todos/TodoSkeleton';

const TodoDetail = lazy(() => import('../../components/todos/TodoDetail'));

const DefferedComponent = ({ children }: PropsWithChildren<{}>) => {
  const [isDeffered, setIsDeffered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeffered(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeffered) return null;
  return <>{children}</>;
};

const TodoDetailPage = () => {
  return (
    <TodoLayout>
      <Suspense
        fallback={
          <DefferedComponent>
            <TodoSkeleton />
          </DefferedComponent>
        }
      >
        <TodoDetail />
      </Suspense>
    </TodoLayout>
  );
};

export default TodoDetailPage;
