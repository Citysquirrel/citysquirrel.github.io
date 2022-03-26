import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ width: string; height: string }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: calc(50vw - ${(props) => props.width}px / 2);
  top: calc(50vh - ${(props) => props.height}px / 2);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: white;
  border-radius: 8px;
  z-index: 2000;
  .exit-wrapper {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 32px;
    width: 32px;
    height: 32px;
    line-height: 26px;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Canvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 53;
`;

const Wrapper = styled.div`
  background-color: transparent;
`;

interface Props {
  width: string;
  height: string;
  element: JSX.Element;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ width, height, element }: Props) => {
  return (
    <>
      <Container width={width} height={height}>
        <div className="exit-wrapper">&times;</div>
        <Wrapper>{element}</Wrapper>
      </Container>
      <Canvas />
    </>
  );
};
