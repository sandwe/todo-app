import axiosInstance from './axiosInstance';
import { TodoForm, TodoFormAndId } from '../types/todos';

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
  updateTodo: ({ id, data }: TodoFormAndId) => {
    return axiosInstance.put(`/todos/${id}`, data);
  },
  deleteTodo: (id: string | undefined) => {
    return axiosInstance.delete(`todos/${id}`);
  },
};
export default todos;
