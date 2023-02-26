import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import NotFoundPage from '../pages/NotFoundPage';
import TodoCreatePage from '../pages/TodoCreatePage';
import TodoDetailPage from '../pages/TodoDetailPage';
import TodoEditPage from '../pages/TodoEditPage';
import Navbar from '../components/common/Navbar';
import PrivateRoutes from './PrivateRoutes';
import RestrictedRoutes from './RestrictedRoutes';

const Router = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route element={<PrivateRoutes />}>
          <Route element={<Navbar />}>
            <Route index element={<MainPage />} />
            <Route path='/todos/:id' element={<TodoDetailPage />} />
            <Route path='/new' element={<TodoCreatePage />} />
            <Route path='/edit/:id' element={<TodoEditPage />} />
          </Route>
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path='auth' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
