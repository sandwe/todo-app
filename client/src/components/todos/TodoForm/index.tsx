import { useState, useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostTodoMutation } from '../../../queries/todo';
import useResizeTextArea from '../../../hooks/useResizeTextArea';

import { Container, Input, TextArea } from './style';
import Button from '../../common/Button';
import Todo from '../../../types/todos';

interface todoFormProps {
  todo?: Todo;
}

const TodoForm = ({ todo }: todoFormProps) => {
  const [title, setTitle] = useState(todo?.title || '');
  const [content, setContent] = useState(todo?.content || '');
  const refContent = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  useResizeTextArea(refContent.current, content);

  const { mutate, isSuccess, data } = usePostTodoMutation();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ title, content });
  };

  if (isSuccess) {
    navigate(`/todos/${data.data.data.id}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>제목</label>
        <Input id='title' placeholder='제목을 입력하세요' maxLength={80} onChange={handleChangeTitle} value={title} />
        <label htmlFor='content'>내용</label>
        <TextArea
          id='content'
          placeholder='내용을 입력하세요'
          ref={refContent}
          rows={1}
          onChange={handleChangeContent}
          value={content}
        />
        <Button type='submit'>저장</Button>
      </form>
    </Container>
  );
};

export default TodoForm;
