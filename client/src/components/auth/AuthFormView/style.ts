import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.article`
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-top: 70px;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  text-align: left;
`;

export const Input = styled.input<{ isValid: boolean }>`
  width: 100%;
  padding: 10px 8px;
  margin-top: 7px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 4px;

  &:focus {
    outline-color: ${({ isValid, theme }) => (isValid ? theme.blue : theme.red)};
  }
`;

export const WarningText = styled.strong<{ isWarn: boolean }>`
  opacity: ${({ isWarn }) => (isWarn ? '1' : '0')};
  font-size: 0.8rem;
  margin: 3px 0 12px 2px;
  color: ${({ theme }) => theme.red};
`;

export const LinkText = styled(Link)`
  margin-top: 20px;
  color: ${({ theme }) => theme.textGray};
  text-align: center;
`;
