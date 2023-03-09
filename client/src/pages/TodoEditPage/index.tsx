import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import TodoLayout from '../../components/todos/TodoLayout';
import TodoFormView from '../../components/todos/TodoFormView';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from '../../hooks/queries/todo';
import { TodoFormProps } from '../TodoCreatePage';

const TodoEditPage = () => {
  const params = useParams();

  const { data: todo } = useGetTodoByIdQuery(params?.id);
  const { mutate } = useUpdateTodoMutation();
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const todoFormProps: TodoFormProps = {
    contentRef,
    title,
    content,
    handleChangeTitle: (e) => setTitle(e.target.value),
    handleChangeContent: (e) => setContent(e.target.value),
    handleSubmit: (e) => {
      e.preventDefault();
      mutate({ id: params?.id, data: { title, content } });
    },
  };

  return (
    <TodoLayout>
      <TodoFormView {...todoFormProps} />
    </TodoLayout>
  );
};

export default TodoEditPage;
