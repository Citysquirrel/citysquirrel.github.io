import styled from 'styled-components';

const Container = styled.div``;

const Frame = styled.div<{ toggleOn: boolean }>`
  position: relative;
  width: 52px;
  height: 28px;
  border: 1px solid black;
  border-radius: 100px;
`;

const Circle = styled.div<{ toggleOn: boolean }>`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 1px;
  left: ${(props) => (props.toggleOn ? '25px' : '1px')};
  border: 1px solid black;
  border-radius: 100px;
  transition: all 0.5s;
`;

interface Props {
  toggleOn: boolean;
}

//! props: 스위치, 색상 객체, 배경이미지

export const Toggle = ({ toggleOn }: Props) => {
  return (
    <Container>
      <Frame toggleOn={toggleOn}>
        <Circle toggleOn={toggleOn}></Circle>
      </Frame>
    </Container>
  );
};
