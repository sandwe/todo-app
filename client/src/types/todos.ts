export interface TodoForm {
  title: string;
  content: string;
}

export default interface TodoData {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export type TodoInput = Pick<TodoData, 'title' | 'content'>;

export interface TodoFormAndId {
  id: string | undefined;
  data: TodoForm;
}
