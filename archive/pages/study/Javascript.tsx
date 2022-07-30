import { useEffect, useState } from 'react';
import styled from 'styled-components';
import hljs from 'highlight.js';
import { Codeblock } from '../../components';
import { Modal } from '../../components';

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
  const [modal, setModal] = useState(false);

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
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          모달
        </button>
      </Wrapper>
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          width="250"
          height="200"
          element={<Test />}
        />
      )}
    </Container>
  );
};
