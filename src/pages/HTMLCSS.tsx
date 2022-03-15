import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  padding-top: 64px;
  height: 256px;
  /* max-width: 968px; */
  background-color: var(--bg-menu);
  font-family: 'SUIT-Light';
`;

const Menu = styled.div`
  display: flex;
  > div {
    flex: auto;
  }
`;

const Contents = styled.div``;

export const HTMLCSS = () => {
  return (
    <Container>
      <Intro>ㅎㅇ</Intro>
      <Menu>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Menu>
      <Contents></Contents>
    </Container>
  );
};
