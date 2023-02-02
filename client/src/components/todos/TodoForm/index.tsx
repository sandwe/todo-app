import React, { useState, useRef } from 'react';
import { Container, Input, TextArea } from './style';
import Button from '../../common/Button';
import useResizeTextArea from '../../../hooks/useResizeTextArea';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const refContent = useRef<HTMLTextAreaElement>(null);

  useResizeTextArea(refContent.current, content);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Container>
      <form>
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
