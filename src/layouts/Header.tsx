import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './../font.css';
import { useEffect, useState } from 'react';

const Container = styled.header<{ isTop: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  user-select: none;
  display: flex;
  align-items: center;
  height: 48px;
  /* background-color: var(--bg-menu); */
  background-color: ${(props) =>
    props.isTop ? 'transparent' : 'var(--bg-menu-tp)'};
  font-family: 'KOHIBaeumOTF';
  ${(props) => (props.isTop ? '' : 'backdrop-filter: blur(4px)')};
  z-index: 1004;
  transition: all 0.3s;
  > progress {
    position: absolute;
    top: 48px;
    width: 100%;
    height: 2px;
    -webkit-appearance: none;
    transition: all 0.3s;
    opacity: ${(props) => (props.isTop ? '0' : '0.61')};

    ::-webkit-progress-bar {
      background-color: ${(props) =>
        props.isTop ? 'transparent' : 'var(--bg-menu-tp)'};
    }
    ::-webkit-progress-value {
      background: linear-gradient(to left, blue, #5d9cec);
    }
  }
`;

const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  height: 48px;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  > a {
    flex: 1 0 auto;
    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
    border-bottom: 4px solid transparent;
    /* background-color: var(--bg-menu); */
    background-color: transparent;
    transition: all 0.3s;
    :hover {
      border-bottom: 4px solid var(--main);
      background-color: var(--main-tint);
    }
  }
  .paged {
    color: var(--main-dark);
  }
`;

export const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [scrollLocaY, setScrollLocaY] = useState(window.scrollY);
  const [page, setPage] = useState(window.location.pathname);

  const pageHeight = document.body.scrollHeight - window.innerHeight;

  const handleCurrentPage =
    (key: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      setPage(key);
    };

  const pageInfo = [
    ['/', 'Main'],
    // ['/study', 'Study'],
    // ['/examples', 'Examples'],
    ['/pictures', 'Pictures'],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollLocaY(window.scrollY);
      if (window.scrollY < 10) setIsTop(true);
      else setIsTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ?????????Y ?????????: document.body.scrollHeight - window.innerHeight
  return (
    <Container isTop={isTop}>
      {/* {scrollLocaY} */}
      <Wrapper>
        {pageInfo.map((v, i) => {
          return (
            <Link
              key={i}
              to={v[0]}
              className={`${page === v[0] ? 'paged' : ''}`}
              onClick={handleCurrentPage(v[0])}
            >
              {v[1]}
            </Link>
          );
        })}
      </Wrapper>
      <progress value={scrollLocaY} max={pageHeight}></progress>
    </Container>
  );
};
