import styled from 'styled-components';
import { Toggle } from '../components';

const Container = styled.div``;

const Intro = styled.div`
  padding-top: 64px;
  padding-bottom: 16px;
  min-height: 256px;
  /* max-width: 968px; */
  background-color: var(--bg-menu);
  font-family: 'SUIT-Light';
  > h1 {
    margin: 8px auto;
    font-size: 48px;
    width: fit-content;
    border-bottom: 2px solid #9dc3f3;
    margin-bottom: 8px;
    background-color: inherit;
  }
  > div {
    margin-left: auto;
    margin-right: auto;
    line-height: 40px;
    max-width: 768px;
    white-space: pre-wrap;
    word-break: keep-all;
    background-color: inherit;
    > a {
      background-color: #9dc3f3;
    }
  }
`;

export const Home = () => {
  return (
    <Container>
      <Intro>
        <h1>WHO?</h1>
        <div>도시다람쥐</div>
      </Intro>
      <Toggle toggleOn={false} />
    </Container>
  );
};
