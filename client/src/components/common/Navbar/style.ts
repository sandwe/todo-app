import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 0.5rem 0 rgba(100, 100, 100, 0.3);
  padding: 1rem 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LogoutBtn = styled.button`
  color: ${({ theme }) => theme.blue};
  font-size: 1rem;
`;
