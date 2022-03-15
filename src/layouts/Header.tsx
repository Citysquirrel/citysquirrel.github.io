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
  backdrop-filter: blur(5px);
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
`;

export const Header = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) setIsTop(true);
      else setIsTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container isTop={isTop}>
      <Wrapper>
        <Link to="/">Main</Link>
        <Link to="/1">HTML / CSS</Link>
        <Link to="/2">JS / TS</Link>
        <Link to="/3">Front-end</Link>
      </Wrapper>
    </Container>
  );
};
