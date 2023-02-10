import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  width: 100%;
`;

export const P = styled.p`
  background-color: ${({ theme }) => theme.skeletonGray};
  width: 100%;
  height: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled(P)`
  background-color: ${({ theme }) => theme.skeletonGray};
  width: 50%;
  height: 1.5rem;
`;

export const Content = styled(P)`
  width: 100%;
`;

export const UpdatedAt = styled(P)`
  float: right;
  width: 30%;
`;
