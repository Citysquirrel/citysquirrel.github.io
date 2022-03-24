import styled from 'styled-components';

const Container = styled.div``;

const CopyWrapper = styled.div``;

const CopyButton = styled.div``;

interface Props {
  body: string;
  lang: string;
}
// props로 본문, 언어 받아서 사용
// 그리고 상위 컴포넌트에서 highlight.js 실행
export const Codeblock = ({ body, lang }: Props) => {
  return (
    <Container>
      <pre>
        <code className={`language-${lang}`}>{body}</code>
      </pre>
    </Container>
  );
};
