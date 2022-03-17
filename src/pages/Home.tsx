import { useEffect } from 'react';
import styled from 'styled-components';

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
        <h1>WHAT?</h1>
        <div>
          <a href="https://velog.io/@tok1324" target="_blank" rel="noreferrer">
            개인 블로그
          </a>
          에 작성되는 예제들을 모아놓은 페이지입니다.
          <p /> 웹 페이지를 구성하기 위해 필요한 요소들에 대한 개념과 그 예제를
          정리했습니다!
        </div>
        <h1>WHY?</h1>
        <div>
          개발자로서 뭔가 배울 때 어떤 코드에 대한 예제가 있으면 굉장히 큰
          도움이 됩니다. <p />
          다른 사람들은 이 코드를 어떻게 짰지? 하는 의문이 생길 때가 다들
          있을겁니다. <p />나 자신 뿐만 아니라, 주니어 및 시니어 개발자
          분들에게도 보고 참고가 될만한 예제들을 정리하는 것이 이 페이지의
          목적입니다 :)
        </div>
      </Intro>
    </Container>
  );
};
