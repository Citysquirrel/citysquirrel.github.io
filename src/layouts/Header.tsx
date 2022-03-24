import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
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
      border-bottom: 4px solid #5d9cec;
      background-color: #9dc3f3;
    }
  }
  .paged {
    color: #5d9cec;
  }
`;

export const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [scrollLocaY, setScrollLocaY] = useState(window.scrollY);
  const [page, setPage] = useState(window.location.pathname);

  const handleCurrentPage =
    (key: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      setPage(key);
    };

  const pageInfo = [
    ['/', 'Main'],
    ['/study', 'Study'],
    ['/examples', 'Examples'],
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

  // 스크롤Y 최대값: document.body.scrollHeight - window.innerHeight
  return (
    <Container isTop={isTop}>
      {scrollLocaY}
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
    </Container>
  );
};
