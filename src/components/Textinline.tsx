import styled from 'styled-components';

interface Props {
  content: string;
  size: number;
  color: string;
  align: number;
}

const Container = styled.span``;

export const Textinline = ({ content, size, color }: Props) => {
  return <Container>{content}</Container>;
};
