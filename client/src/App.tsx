import { QueryClientProvider } from '@tanstack/react-query';

import Router from './router/Router';
import queryClient from './queries/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
