import styled from 'styled-components';
import Markdown from 'react-markdown';

interface Props {
  content: string;
  size: number;
  color: string;
  bg: string;
  align: string;
}

const Container = styled.div`
  margin: 4px;
  padding: 8px;
  box-shadow: 0 0 2px 1px black inset;
  border-radius: 8px;
`;

const MdWrap = styled.div<{ props: Props }>`
  padding: 8px;
  /* font-size: ${(props) => props.props.size}px; */
  /* color: ${(props) => props.props.color}; */
  background-color: ${(props) => props.props.bg};
  text-align: ${(props) => props.props.align};
  /* white-space: pre; */
  /* Below the style of markdown block */
  * {
    margin: 8px;
  }
  ul {
    padding: 0 0 0 40px;
  }
  h1 {
    border-bottom: 2px solid #ccc;
  }
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 16px;
  }
  a {
    color: #1c7ed6;
    /* #58a6ff at Dark mode */
  }
`;

export const Textblock = (props: Props) => {
  return (
    <Container>
      <MdWrap props={props}>
        <Markdown>{props.content}</Markdown>
      </MdWrap>
    </Container>
  );
};
