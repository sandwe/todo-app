import useResizeTextArea from '../../../hooks/useResizeTextArea';

import { Container, Input, TextArea } from './style';
import Button from '../../common/Button';
import { TodoFormProps } from '../../../pages/TodoCreatePage';

const TodoForm = ({
  contentRef,
  title,
  content,
  handleChangeTitle,
  handleChangeContent,
  handleSubmit,
}: TodoFormProps) => {
  useResizeTextArea(contentRef.current, content);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>제목</label>
        <Input id='title' placeholder='제목을 입력하세요' maxLength={80} onChange={handleChangeTitle} value={title} />
        <label htmlFor='content'>내용</label>
        <TextArea
          id='content'
          placeholder='내용을 입력하세요'
          ref={contentRef}
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
