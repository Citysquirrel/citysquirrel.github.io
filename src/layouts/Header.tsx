import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './../font.css';

const Container = styled.header`
  user-select: none;
  display: flex;
  align-items: center;
  height: 48px;
  background-color: var(--bg-menu);
  font-family: 'KOHIBaeumOTF';
`;

const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  height: 48px;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;

  > a {
    flex: 1 0 auto;
    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
    border-bottom: 4px solid var(--bg-menu);
    background-color: var(--bg-menu);
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
