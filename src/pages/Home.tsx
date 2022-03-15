import styled from 'styled-components';

const Container = styled.div``;

const Intro = styled.div`
  padding-top: 64px;
  height: 256px;
  /* max-width: 968px; */
  background-color: var(--bg-menu);
  font-family: 'SUIT-Light';
`;

export const Home = () => {
  return (
    <Container>
      <Intro>
        개인 블로그에 작성되는 예제들을 모아놓은 페이지입니다! 개발자로서 뭔가를
        배울 때 어떤 코드에 대한 예제가 있으면 굉장히 큰 도움이 됩니다. 나 자신
        뿐만 아니라, 주니어 및 시니어 개발자 분들에게도 보고 참고가 될만한
        예제들을 정리하는 것이 이 페이지의 목적입니다 :)
      </Intro>
    </Container>
  );
};
