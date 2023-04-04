import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to='/auth' />;
};

export default PrivateRoutes;
