import styled from 'styled-components';

export const Container = styled.section`
  flex-grow: 1;
  padding: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 4px;
  padding: 10px 8px;
  box-sizing: border-box;
  margin: 0.5rem 0 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 4px;
  padding: 10px 8px;
  box-sizing: border-box;
  resize: none;
  margin: 0.5rem 0 1rem;
  font-family: inherit;
  line-height: 1.5;
`;
