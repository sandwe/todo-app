import styled from 'styled-components';

export const Container = styled.section`
  flex-grow: 1;
  padding: 2rem;
`;

export const ButtonWrapper = styled.div`
  text-align: end;
  & button + button {
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  padding: 14px 0;
  width: 4rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme, color }) => (color === 'pink' ? theme.red : theme.blue)};
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 5px;
  margin: 8px 0 20px;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  word-break: break-all;
`;

export const Content = styled.p`
  margin-bottom: 1rem;
  word-break: break-all;
`;

export const UpdatedAt = styled.time`
  color: ${({ theme }) => theme.textGray};
  font-size: 0.8rem;
  float: right;
`;
