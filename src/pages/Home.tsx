import { useState } from 'react';
import styled from 'styled-components';
import { Toggle } from '../components';
import { Textblock } from '../components/Textblock';

const Container = styled.div``;

const Intro = styled.div`
  padding-top: 64px;
  padding-bottom: 16px;
  min-height: 256px;
  font-size: x-large;
  /* max-width: 968px; */
  background-color: var(--bg-menu);
  font-family: 'SUIT-Light';
  > h1 {
    margin: 8px auto;
    font-size: 48px;
    width: fit-content;
    border-bottom: 2px solid #9dc3f3;
    margin-bottom: 8px;
    background-color: inherit;
  }
  > div {
    margin-left: auto;
    margin-right: auto;
    line-height: 40px;
    max-width: 768px;
    white-space: pre-wrap;
    word-break: keep-all;
    background-color: inherit;
    > a {
      background-color: #9dc3f3;
    }
  }
`;

const Contents = styled.div`
  padding: 4px;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

export const Home = () => {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <Container>
      <Intro>
        <h1>WHO?</h1>
        <div>도시다람쥐</div>
      </Intro>

      <Contents>
        {/* <Toggle
          toggleOn={toggleOn}
          setToggleOn={setToggleOn}
          color={{
            circle: '#999',
            background: '#ccc',
            backgroundActive: '#b5dbff',
            border: '#aaa',
          }}
          image={null}
        /> */}
        <Textblock
          content={`## Introducion\n* Nick: 도시다람쥐\n* Name: 곽명우\n##Career\n* Codestates Software Engineer Bootcamp\n  * asd`}
          size={16}
          color={'blue'}
          bg={'inherit'}
          align={'left'}
        />
      </Contents>
    </Container>
  );
};
