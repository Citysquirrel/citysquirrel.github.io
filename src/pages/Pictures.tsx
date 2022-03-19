import { useState } from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import AWS from 'aws-sdk';

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
const Contents = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 968px;
  .cat-wrapper {
    border: 1px solid black;
    margin: 16px;
  }

  .pic-controller-wrapper {
    display: flex;
  }
  .pic-controller {
    flex: 1 0 auto;
    margin: auto;
    cursor: pointer;
    :hover {
      color: #777;
    }
    > svg {
      margin-left: 4px;
      margin-right: 4px;
    }
  }
  .disabled {
    cursor: auto;
    color: #ddd;
    :hover {
      color: #ddd;
    }
  }
  img {
    display: block;
    width: 512px;
    margin: 8px;
  }
`;

const imgPoint =
  'https://myimages-citysquirrel.s3.ap-northeast-2.amazonaws.com/%ED%95%B4%ED%83%88%EC%9D%B4/';

const images = Array.from({ length: 14 }, (v, i) => {
  return [`${imgPoint}${i + 1}.jpg`, `${i + 1}번`];
});

export const Pictures = () => {
  const [curPic, setCurPic] = useState(0);

  // const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  // const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  // const REGION = 'ap-northeast-2';
  // const S3_BUCKET = 'myimages-citysquirrel';

  // AWS.config.update({
  //   accessKeyId: ACCESS_KEY,
  //   secretAccessKey: SECRET_ACCESS_KEY,
  // });

  // const s3 = new AWS.S3({
  //   params: { Bucket: S3_BUCKET },
  //   region: REGION,
  // });

  // s3.listBuckets((err, data) => {
  //   if (err) console.log(err.stack);
  //   else console.log(data);
  // });

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
        <div>{images[curPic][1]}</div>
        <div className="cat-wrapper">
          <div className="pic-controller-wrapper">
            <div
              className={
                curPic === 0 ? 'pic-controller disabled' : 'pic-controller'
              }
              onClick={() => {
                setCurPic((prev) => (prev !== 0 ? prev - 1 : prev));
              }}
            >
              <FaAngleLeft />
            </div>
            <div
              className={
                curPic === 13 ? 'pic-controller disabled' : 'pic-controller'
              }
              onClick={() => {
                setCurPic((prev) => (prev !== 13 ? prev + 1 : prev));
              }}
            >
              <FaAngleRight />
            </div>
          </div>
          <img src={images[curPic][0]} alt="mycat" />
        </div>
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
