import axiosInstance from './axiosInstance';
import { TodoForm } from '../types/todos';

const todos = {
  getTodos: () => {
    return axiosInstance.get('/todos');
  },
  getTodoById: async (id: string | undefined) => {
    return axiosInstance.get(`/todos/${id}`);
  },
  createTodo: (data: TodoForm) => {
    return axiosInstance.post('/todos', data);
  },
  updateTodo: (id: string, data: TodoForm) => {
    return axiosInstance.put(`/todos/${id}`, data);
  },
  deleteTodo: (id: string | undefined) => {
    return axiosInstance.delete(`todos/${id}`);
  },
};
export default todos;
