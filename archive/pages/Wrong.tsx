import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  margin: 8px;
`;

export const Wrong = () => {
  return (
    <Container>
      막다른 길!
      <p />
      <a href="javascript:window.history.back()">뒤로가기</a>
      <Link to="/">홈으로</Link>
    </Container>
  );
};
