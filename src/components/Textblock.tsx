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
  padding: 8px;
  box-shadow: 2px 2px 2px 2px black inset;
`;

const MdWrap = styled.div<{ props: Props }>`
  /* font-size: ${(props) => props.props.size}px; */
  color: ${(props) => props.props.color};
  background-color: ${(props) => props.props.bg};
  text-align: ${(props) => props.props.align};
  white-space: pre;
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
