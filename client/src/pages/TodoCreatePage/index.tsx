import { useState, useRef } from 'react';

import TodoLayout from '../../components/todos/TodoLayout';
import TodoForm from '../../components/todos/TodoForm';
import { usePostTodoMutation } from '../../queries/todo';
import { VAC } from 'react-vac';

export interface TodoFormProps {
  contentRef: React.RefObject<HTMLTextAreaElement | null>;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const TodoCreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const contentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = usePostTodoMutation();

  const todoFormProps: TodoFormProps = {
    contentRef,
    handleChangeTitle: (e) => setTitle(e.target.value),
    handleChangeContent: (e) => setContent(e.target.value),
    handleSubmit: (e) => {
      e.preventDefault();
      mutate({ title, content });
    },
  };

  return (
    <TodoLayout>
      <VAC name='view' data={todoFormProps} />
      {/* <TodoForm mutate={mutate} /> */}
    </TodoLayout>
  );
};

export default TodoCreatePage;
