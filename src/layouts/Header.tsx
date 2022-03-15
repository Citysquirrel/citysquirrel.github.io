import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import './../font.css';

const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  user-select: none;
  display: flex;
  align-items: center;
  height: 48px;
  /* background-color: var(--bg-menu); */
  background-color: transparent;
  font-family: 'KOHIBaeumOTF';
  /* backdrop-filter: blur(5px); */
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
  return (
    <Container>
      <Wrapper>
        <Link to="/">Main</Link>
        <Link to="/">HTML / CSS</Link>
        <Link to="/">JS / TS</Link>
        <Link to="/">Front-end</Link>
      </Wrapper>
    </Container>
  );
};
