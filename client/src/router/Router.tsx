import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='/todos/:id' element={<Home />} />
        <Route path='auth' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Router;
