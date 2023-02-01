import styled from 'styled-components';

export const StyledButton = styled.button<{ size?: string }>`
  padding: 14px 0;
  width: ${({ size }) => (size === 'small' ? '4rem' : '100%')};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme, color }) => (color === 'red' ? theme.red : theme.blue)};
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 5px;
  margin: 8px 0 20px;

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.borderGray};
    color: ${({ theme }) => theme.textGray};
  }
`;
