import styled from 'styled-components';

interface Props {
  content: string;
  size: number;
  color: string;
  bg: string;
  align: string;
}

const Container = styled.div<{ props: Props }>`
  font-size: ${(props) => props.props.size}px;
  color: ${(props) => props.props.color};
  background-color: ${(props) => props.props.bg};
  text-align: ${(props) => props.props.align}; ;
`;

export const Textblock = (props: Props) => {
  return <Container props={props}>{props.content}</Container>;
};
