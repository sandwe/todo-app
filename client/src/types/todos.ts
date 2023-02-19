export interface TodoForm {
  title: string;
  content: string;
}

export default interface Todo {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export type TodoInput = Pick<Todo, 'title' | 'content'>;

export interface TodoFormAndId {
  id: string | undefined;
  data: TodoForm;
}
