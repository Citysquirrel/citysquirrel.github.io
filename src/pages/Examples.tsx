import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { First } from './1';

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

export const Examples = () => {
  return (
    <Container>
      <Intro>
        <Routes>
          <Route
            path="/"
            element={
              <>
                아직 공사중이예요 ㅠ.. 페이지 어떻게 구성할지 좀 더 고민후에
                찾아뵐게요!
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
