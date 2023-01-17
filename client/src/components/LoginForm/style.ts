import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

export const Label = styled.label`
  text-align: left;
`;

export const Input = styled.input`
  padding: 10px 8px;
  margin: 7px 0 20px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 14px 0;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 5px;
  margin-bottom: 20px;
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.borderGray};
    color: ${({ theme }) => theme.textGray};
  }
`;

export const LinkText = styled(Link)`
  color: ${({ theme }) => theme.textGray};
`;
