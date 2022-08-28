import styled from 'styled-components';
import { useBodyColor } from '../functions';

const Container = styled.main`
  margin-top: 60px;
`;

export default function Home() {
  useBodyColor('#fdfdfd');
  return <Container></Container>;
}
