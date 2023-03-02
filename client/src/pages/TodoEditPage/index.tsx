import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import TodoLayout from '../../components/todos/TodoLayout';
import TodoForm from '../../components/todos/TodoForm';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from '../../queries/todo';
import { TodoFormProps } from '../TodoCreatePage';
import { VAC } from 'react-vac';
const TodoEditPage = () => {
  const params = useParams();

  const { data: todo } = useGetTodoByIdQuery(params?.id);
  const { mutate } = useUpdateTodoMutation();
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const todoFormProps: TodoFormProps = {
    contentRef,
    handleChangeTitle: (e) => setTitle(e.target.value),
    handleChangeContent: (e) => setContent(e.target.value),
    handleSubmit: (e) => {
      e.preventDefault();
      mutate({ id: params?.id, data: { title, content } });
    },
  };

  return (
    <TodoLayout>
      <VAC name='view' data={todoFormProps} />
      {/* <TodoForm todo={todo} mutate={mutate} isEditMode={true} /> */}
    </TodoLayout>
  );
};

export default TodoEditPage;
