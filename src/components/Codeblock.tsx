import styled from 'styled-components';
import { FaRegCopy } from 'react-icons/fa';
import './../index.css';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  border-radius: 8px;
  margin: 8px;
  background-color: transparent;
  /* border: 1px solid grey; */
  > pre {
    > code {
      text-align: left;
      font-size: 14px;
      border-radius: 8px;
      ::-webkit-scrollbar {
        display: block;

        height: 4px;
      }
      /* ::-webkit-scrollbar-track {
        height: 4px;
      } */
      ::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 8px;
      }
      > span {
        font-size: inherit;
      }
    }
  }
`;

const CopyWrapper = styled.div<{ visibility: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 4px;
  border: 1px solid var(--main);
  background-color: var(--main-tint);
  visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visibility ? '1' : '0')};
  transition: 0.3s;
  cursor: pointer;
  :hover {
    border-color: aliceblue;
    background-color: var(--main-tint-more);
  }
`;

const CopyButton = styled.div`
  background-color: transparent;

  > svg {
    font-size: 20px;
    background-color: inherit;
  }
`;

interface Props {
  body: string;
  lang: string;
}
// props로 본문, 언어 받아서 사용
// 그리고 상위 컴포넌트에서 highlight.js 실행
export const Codeblock = ({ body, lang }: Props) => {
  const [copyBtn, setCopyBtn] = useState(false);

  const handleMouseOver = () => {
    setCopyBtn(true);
  };
  const handleMouseBlur = () => {
    setCopyBtn(false);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(body);
  };

  return (
    <Container onMouseOver={handleMouseOver} onMouseOut={handleMouseBlur}>
      <pre>
        <code className={`language-${lang}`}>{body}</code>
      </pre>
      <CopyWrapper visibility={copyBtn} onClick={handleCopy}>
        <CopyButton>
          <FaRegCopy />
        </CopyButton>
      </CopyWrapper>
    </Container>
  );
};
