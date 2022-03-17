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
      어떻게 들어왔어요?!
      <a href="javascript:window.history.back()">뒤로가기</a>
    </Container>
  );
};
