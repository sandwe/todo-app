import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
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
