import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
  background-color: ${(props) => (props.isTop ? 'transparent' : '#a1cdf799')};
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
        props.isTop ? 'transparent' : 'var(--gray-300)'};
    }
    ::-webkit-progress-value {
      background: linear-gradient(to left, blue, var(--soft-blue-500));
    }
  }
`;

const Logo = styled.div`
  flex: auto;
  text-align: start;
  font-size: 1.125rem;
  font-weight: 600;
  padding-left: 48px;
  > a {
    padding: 8px 16px;
    text-decoration: var(--gray-500) dotted underline;
  }
  :hover > a {
    color: var(--gray-700);
    text-decoration-color: var(--soft-orange-800);
  }
`;

const Wrapper = styled.nav`
  display: flex;
  width: fit-content;
  margin: 0 12px;
  background-color: transparent;
  > a {
    flex: 1 0 auto;
    width: fit-content;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 3rem;
    margin: 0 16px;
    /* background-color: var(--bg-menu); */
    background-color: transparent;
    transition: all 0.3s;
    transform: rotateY('90deg');
    &.paged:after {
      border-bottom-color: var(--soft-blue-600);
      transform: scaleX(1) translateY(-8px);
    }
    :after {
      display: block;
      content: '';
      border-bottom: solid 2px var(--gray-900);
      transform: scaleX(0) translateY(-8px);
      transition: transform 0.25s ease-in-out;
    }
    :hover {
      :after {
        transform: scaleX(1) translateY(-8px);
      }
    }
  }
  .paged {
    color: var(--soft-blue-600);
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
    ['/', 'About'],
    ['/blog', 'Blog'],
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
      {/* {scrollLocaY} */}
      <Logo>
        <a href="/">도시다람쥐.github.io</a>
      </Logo>
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
