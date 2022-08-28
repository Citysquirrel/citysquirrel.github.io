import styled from 'styled-components';
import { useBodyColor, useScreenBorder } from '../functions';

const Container = styled.main`
  margin-top: 60px;
`;

export default function Home() {
  useBodyColor('#fdfdfd');
  useScreenBorder(
    {
      top: '60px',
      right: '60px',
      bottom: '60px',
      left: '60px',
      container: '60px',
    },
    '#b3e6a8'
  );
  return (
    <Container>
      <h1>안녕하세요, 도시다람쥐입니다🐿</h1>
    </Container>
  );
}
