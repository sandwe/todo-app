import { useState, useRef } from 'react';

import TodoLayout from '../../components/todos/TodoLayout';
import TodoFormView from '../../components/todos/TodoFormView';
import { usePostTodoMutation } from '../../queries/todo';

export interface TodoFormProps {
  contentRef: React.RefObject<HTMLTextAreaElement>;
  title: string;
  content: string;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const TodoCreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const contentRef = useRef(null);
  const { mutate } = usePostTodoMutation();

  const todoFormProps: TodoFormProps = {
    contentRef,
    title,
    content,
    handleChangeTitle: (e) => setTitle(e.target.value),
    handleChangeContent: (e) => setContent(e.target.value),
    handleSubmit: (e) => {
      e.preventDefault();
      mutate({ title, content });
    },
  };

  return (
    <TodoLayout>
      <TodoFormView {...todoFormProps} />
    </TodoLayout>
  );
};

export default TodoCreatePage;
