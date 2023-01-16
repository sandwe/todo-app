import axiosInstance from './axiosInstance';
import { UserInfo } from '../types/auth';

const authAPI = {
  login: (data: UserInfo) => {
    return axiosInstance.post('/users/login', data);
  },
  signUp: (data: UserInfo) => {
    return axiosInstance.post('/users/create', data);
  },
};

export default authAPI;
