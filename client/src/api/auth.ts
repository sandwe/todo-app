import axiosInstance from './axiosInstance';
import { AuthResponse, UserInfo } from '../types/auth';

const authAPI = {
  login: async (userInfo: UserInfo): Promise<AuthResponse> => {
    const { data } = await axiosInstance.post('/users/login', userInfo);

    return data;
  },
  signup: async (userInfo: UserInfo): Promise<AuthResponse> => {
    const { data } = await axiosInstance.post('/users/create', userInfo);

    return data;
  },
};

export default authAPI;
