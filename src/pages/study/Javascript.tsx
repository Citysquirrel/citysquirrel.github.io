import { useEffect } from 'react';
import styled from 'styled-components';
import hljs from 'highlight.js';
import { Codeblock } from '../../components';
import { Modal } from '../../components/Modal';

const Container = styled.div``;

const Wrapper = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

function Test() {
  return <>읭</>;
}

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
      <Modal width="250" height="200" element={<Test />} />
    </Container>
  );
};
