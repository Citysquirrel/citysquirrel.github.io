import { useEffect } from 'react';
import styled from 'styled-components';
import hljs from 'highlight.js';
import { Codeblock } from '../../components';

const Container = styled.div``;

const Wrapper = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

export const Javascript = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Codeblock
          body={`const num = 0;
console.log(num);
const teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest = test;`}
          lang="javascript"
        />
      </Wrapper>
    </Container>
  );
};
