import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { First } from './1';
import { Javascript } from './study/Javascript';

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
    background-color: transparent;
  }
  > div {
    margin-left: auto;
    margin-right: auto;
    line-height: 40px;
    max-width: 768px;
    white-space: pre-wrap;
    word-break: keep-all;
    background-color: transparent;
    > a {
      background-color: #9dc3f3;
    }
  }
  position: relative;
  z-index: 1;
  :after {
    position: absolute;
    background-image: url(${`'${process.env.PUBLIC_URL}/images/study_intro.png'`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.4;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
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

export const Study = () => {
  const [studyPage, setStudyPage] = useState(0);
  return (
    <Container>
      <Intro>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <h1>WHAT?</h1> */}
                <div>같이 코딩 공부해요!</div>
              </>
            }
          />
          <Route
            path="/1"
            element={
              <>
                <div>기술면접 준비를 위한 복습 페이지</div>
              </>
            }
          />
          <Route path="/2" element={<>2</>} />
          <Route path="/3" element={<>3</>} />
          <Route path="/4" element={<>4</>} />
          <Route path="/5" element={<>5</>} />
          <Route path="/6" element={<>6</>} />
        </Routes>
      </Intro>
      <Menu>
        <div className="menu-wrapper">
          <Link to="" className={`menu-tab`}>
            Main
          </Link>
          <Link to="1" className="menu-tab">
            Javascript
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
          <Route path="/1" element={<Javascript />} />
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
