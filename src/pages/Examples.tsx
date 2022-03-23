import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { First } from './1';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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

export const Examples = () => {
  return (
    <Container>
      <Intro>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>WHAT?</h1>
                <div>
                  <a
                    href="https://velog.io/@tok1324"
                    target="_blank"
                    rel="noreferrer"
                  >
                    개인 블로그
                  </a>
                  에 작성되는 예제들을 모아놓은 페이지입니다.
                  <p /> 웹 페이지를 구성하기 위해 필요한 요소들에 대한 개념과 그
                  예제를 정리했습니다!
                </div>
                <h1>WHY?</h1>
                <div>
                  개발자로서 뭔가 배울 때 어떤 코드에 대한 예제가 있으면 굉장히
                  큰 도움이 됩니다. <p />
                  다른 사람들은 이 코드를 어떻게 짰지? 하는 의문이 생길 때가
                  다들 있을겁니다. <p />나 자신 뿐만 아니라, 주니어 및 시니어
                  개발자 분들에게도 보고 참고가 될만한 예제들을 정리하는 것이 이
                  페이지의 목적입니다 :)
                </div>
              </>
            }
          />
          <Route path="/1" element={<>1</>} />
          <Route path="/2" element={<>2</>} />
          <Route path="/3" element={<>3</>} />
          <Route path="/4" element={<>4</>} />
          <Route path="/5" element={<>5</>} />
          <Route path="/6" element={<>6</>} />
        </Routes>
      </Intro>
      <Menu>
        <div className="menu-wrapper">
          <Link to="" className="menu-tab">
            Main
          </Link>
          <Link to="1" className="menu-tab">
            1
          </Link>
          <Link to="2" className="menu-tab">
            2
          </Link>
          <Link to="3" className="menu-tab">
            3
          </Link>
          <Link to="4" className="menu-tab">
            4
          </Link>
          <Link to="5" className="menu-tab">
            5
          </Link>
          <Link to="6" className="menu-tab">
            6
          </Link>
        </div>
      </Menu>
      <Contents>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/1" element={<First />} />
          <Route path="/2" element={<First />} />
          <Route path="/3" element={<First />} />
          <Route path="/4" element={<First />} />
          <Route path="/5" element={<First />} />
          <Route path="/6" element={<First />} />
        </Routes>
      </Contents>
    </Container>
  );
};
