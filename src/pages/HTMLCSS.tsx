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
  /* display: flex; */
  background-color: var(--bg-menu);
  > .menu-wrapper {
    max-width: 968px;
    display: flex;
    /* flex: auto; */
    margin: 8px;
    margin-left: auto;
    margin-right: auto;
    background-color: inherit;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    > .menu-tab {
      flex: 1 0 128px;
      /* display: inline-block; */
      margin: 0 4px;
      /* width: 128px; */
      background-color: inherit;
      border-bottom: 2px solid var(--bg-menu);
      cursor: pointer;
      :hover {
        background-color: #9dc3f3;
        border-bottom: 2px solid #5d9cec;
        transition: all 0.3s;
      }
    }
  }
`;

const Contents = styled.div``;

export const HTMLCSS = () => {
  return (
    <Container>
      <Intro>Introduction</Intro>
      <Menu>
        <div className="menu-wrapper">
          <div className="menu-tab">1</div>
          <div className="menu-tab">2</div>
          <div className="menu-tab">3</div>
          <div className="menu-tab">4</div>
          <div className="menu-tab">5</div>
          <div className="menu-tab">6</div>
          <div className="menu-tab">7</div>
          <div className="menu-tab">8</div>
          <div className="menu-tab">9</div>
          <div className="menu-tab">10</div>
        </div>
      </Menu>
      <Contents></Contents>
    </Container>
  );
};
