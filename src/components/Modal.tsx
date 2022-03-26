import styled from 'styled-components';

const Container = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  .exit-wrapper {
  }
`;

const Wrapper = styled.div``;

interface Props {
  width: string;
  height: string;
  element: JSX.Element;
}

export const Modal = ({ width, height, element }: Props) => {
  return (
    <Container width={width} height={height}>
      <div className="exit-wrapper"></div>
      <Wrapper>{element}</Wrapper>
    </Container>
  );
};
