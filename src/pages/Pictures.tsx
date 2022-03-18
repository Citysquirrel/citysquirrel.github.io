import { url } from 'inspector';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  position: relative;
  padding-top: 128px;
  height: 512px;
  font-weight: 900;
  /* max-width: 968px; */
  background-color: var(--bg-menu);
  font-family: 'SUIT-Light';
  z-index: 1;

  :after {
    position: absolute;
    background-image: url(${`'${process.env.PUBLIC_URL}/images/picture_intro.jpg'`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.5;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const Menu = styled.div`
  /* display: flex; */
  /* background-color: var(--bg-menu); */
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
//https://myimages-citysquirrel.s3.ap-northeast-2.amazonaws.com/%ED%95%B4%ED%83%88%EC%9D%B4/20210708_110636.jpg

const Contents = styled.div``;

export const Pictures = () => {
  return (
    <Container>
      <Intro>
        {/* <Routes>
          <Route path="/" element={<>Introduction</>} />
          <Route path="/1" element={<>1</>} />
          <Route path="/2" element={<>2</>} />
          <Route path="/3" element={<>3</>} />
          <Route path="/4" element={<>4</>} />
          <Route path="/5" element={<>5</>} />
          <Route path="/6" element={<>6</>} />
        </Routes> */}
        우리집 냥이 보고가!
      </Intro>
      <Menu>
        <div className="menu-wrapper"></div>
      </Menu>
      {/* <Menu>
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
      </Menu> */}
      <Contents>
        {/* <Routes>
          <Route path="/" element={<First />} />
          <Route path="/1" element={<First />} />
          <Route path="/2" element={<First />} />
          <Route path="/3" element={<First />} />
          <Route path="/4" element={<First />} />
          <Route path="/5" element={<First />} />
          <Route path="/6" element={<First />} />
        </Routes> */}
      </Contents>
    </Container>
  );
};
