import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  return token ? <Outlet /> : <Navigate to='/auth' />;
};

export default PrivateRoutes;
