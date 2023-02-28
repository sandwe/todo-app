import { useState, useEffect, lazy, Suspense, PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import TodoFallback from '../../components/todos/TodoFallback';
import TodoContainer from '../../components/todos/TodoContainer';
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
  const navigate = useNavigate();

  return (
    <TodoContainer>
      <ErrorBoundary FallbackComponent={TodoFallback} onReset={() => navigate('/')}>
        <Suspense
          fallback={
            <DefferedComponent>
              <TodoSkeleton />
            </DefferedComponent>
          }
        >
          <TodoDetail />
        </Suspense>
      </ErrorBoundary>
    </TodoContainer>
  );
};

export default TodoDetailPage;
